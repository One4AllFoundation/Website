import { Delius } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const delius = Delius({
    weight: '400', // or specify the weights you need
    subsets: ['latin'],
});

export const metadata = {
    title: "One for All Foundation",
    description: "Celebrate the elderly",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={delius.className}>
        <body>
        <div className="main-content">
            <Navbar />
            {children}
            <Footer />
        </div>
        </body>
        </html>
    );
}