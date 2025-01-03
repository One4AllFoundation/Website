// app/api/subscribe/route.js
export const runtime = 'edge'; // Enable Edge Runtime

export async function POST(request) {
    try {
        // Parse the request body
        const { email } = await request.json();

        // Validate the email
        if (!email || !email.includes('@')) {
            return new Response(JSON.stringify({ message: 'Please provide a valid email address.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Prepare the Mailchimp API request
        const mailchimpData = {
            email_address: email,
            status: 'subscribed',
        };

        const mailchimpEndpoint = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`;
        const apiKey = process.env.MAILCHIMP_API_KEY;

        // Send the request to Mailchimp
        const response = await fetch(mailchimpEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `apikey ${apiKey}`,
            },
            body: JSON.stringify(mailchimpData),
        });

        // Handle the Mailchimp API response
        const data = await response.json();

        if (response.ok) {
            return new Response(JSON.stringify({ message: 'Thank you for subscribing!' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            let errorMessage = 'Something went wrong. Please try again.';
            if (data.title === 'Invalid Resource') {
                errorMessage = 'This email is already subscribed.';
            } else if (data.title === 'Invalid API Key') {
                errorMessage = 'Invalid API key. Please contact support.';
            } else if (data.title === 'Invalid List ID') {
                errorMessage = 'Invalid list ID. Please contact support.';
            }

            return new Response(JSON.stringify({ message: errorMessage }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        // Handle unexpected errors
        console.error('Error in subscribe API route:', error);
        return new Response(JSON.stringify({ message: 'An error occurred. Please try again.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}