const HowWeHelp = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-6xl font-bold text-red-600 mb-12 text-center">
                    How We Help
                </h2>
                <div className="flex flex-col space-y-12">
                    {/* Companionship Section */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://via.placeholder.com/500x300"
                                alt="Companionship"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-4xl font-semibold text-green-600 mb-4">Companionship</h3>
                            <p className="text-gray-700 text-lg">
                                We provide friendly visits and engaging activities to combat loneliness. Our volunteers spend quality time with elders, ensuring they feel valued and connected.
                            </p>
                        </div>
                    </div>

                    {/* Health & Wellness Section */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://via.placeholder.com/500x300"
                                alt="Health & Wellness"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-4xl font-semibold text-green-600 mb-4">Health & Wellness</h3>
                            <p className="text-gray-700 text-lg">
                                We promote physical and mental well-being through tailored programs. From yoga classes to mental health workshops, we ensure our elders stay active and healthy.
                            </p>
                        </div>
                    </div>

                    {/* Community Events Section */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://via.placeholder.com/500x300"
                                alt="Community Events"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-4xl font-semibold text-green-600 mb-4">Community Events</h3>
                            <p className="text-gray-700 text-lg">
                                We host gatherings to foster connections and celebrate life. From holiday parties to cultural events, we create opportunities for elders to socialize and enjoy life.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <p className="text-gray-700 text-xl mb-6">
                        Want to learn more about what we do? Visit our blog for in-depth articles and stories.
                    </p>
                    <a
                        href="/blog"
                        className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                        Visit Our Blog
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowWeHelp;