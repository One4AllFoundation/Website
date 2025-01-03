import Link from 'next/link'; // Import Next.js Link

const StoryHighlights = () => {
    return (
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-6xl font-bold text-red-600">
                    Story Highlights
                </h2>
                <p className="text-xl text-gray-600 mb-8 pt-4">
                    Discover inspiring stories from the One4All community. Each story is a journey of joy, resilience, and connection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Story Card 1 */}
                    <Link href="/story/samantha" passHref>
                        <div className="block bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-200 hover:scale-105 border border-gray-100 h-full flex flex-col">
                            <img src="https://via.placeholder.com/150" alt="Samantha" className="w-full h-64 object-cover rounded-lg mb-6" />
                            <h3 className="text-2xl font-bold text-green-600 mb-4">Samantha's Journey</h3>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed flex-grow">
                                Samantha, a vibrant grandmother, shares how One4All helped her reconnect with her family and rediscover her passion for gardening.
                            </p>
                            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
                                Read More
                            </button>
                        </div>
                    </Link>

                    {/* Story Card 2 */}
                    <Link href="/story/john" passHref>
                        <div className="block bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-200 hover:scale-105 border border-gray-100 h-full flex flex-col">
                            <img src="https://via.placeholder.com/150" alt="John" className="w-full h-64 object-cover rounded-lg mb-6" />
                            <h3 className="text-2xl font-bold text-green-600 mb-4">John's Adventure</h3>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed flex-grow">
                                At 78, John embarked on a life-changing adventure with One4All, traveling to places he had only dreamed of.
                            </p>
                            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
                                Read More
                            </button>
                        </div>
                    </Link>

                    {/* Story Card 3 */}
                    <Link href="/story/maria" passHref>
                        <div className="block bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-200 hover:scale-105 border border-gray-100 h-full flex flex-col">
                            <img src="https://via.placeholder.com/150" alt="Maria" className="w-full h-64 object-cover rounded-lg mb-6" />
                            <h3 className="text-2xl font-bold text-green-600 mb-4">Maria's Legacy</h3>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed flex-grow">
                                Maria, at 83, reflects on her life and how One4All helped her preserve her legacy through storytelling.
                            </p>
                            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
                                Read More
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StoryHighlights;