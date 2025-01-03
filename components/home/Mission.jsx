import React from 'react';

const Mission = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffedbf]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-red-600 mb-6">
                    Our Mission
                </h2>
                <p className="text-2xl text-gray-700 mb-8">
                    At <span className="text-green-600 font-semibold">One4All</span>, we honor the elderly—the heart of
                    our nation. In a world that often overlooks them, we strive to bring joy, love, and fulfillment to
                    their lives. Through kindness and care, we help them feel cherished and youthful once more.
                </p>
                <div className="mt-10">
                    <a
                        href="#"
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Mission;