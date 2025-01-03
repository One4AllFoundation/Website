const HowWeHelp = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-red-600 mb-8">
                    How We Help
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-green-600 mb-4">Companionship</h3>
                        <p className="text-gray-700">We provide friendly visits and engaging activities to combat loneliness.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-green-600 mb-4">Health & Wellness</h3>
                        <p className="text-gray-700">We promote physical and mental well-being through tailored programs.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-green-600 mb-4">Community Events</h3>
                        <p className="text-gray-700">We host gatherings to foster connections and celebrate life.</p>
                    </div>
                </div>
                {/* CTA Section */}
                <div className="mt-12">
                    <p className="text-gray-700 mb-4">
                        Want to learn more about what we do? Visit our blog for in-depth articles and stories.
                    </p>
                    <a
                        href="/blog" // Update this to your actual blog page URL
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                        Visit Our Blog
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowWeHelp;