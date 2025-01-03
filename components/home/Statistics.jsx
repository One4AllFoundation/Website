import React from 'react';

const Statistics = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-6xl font-bold text-red-600 mb-12">
                    The Problem We Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Statistic 1: Loneliness */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <h3 className="text-5xl font-bold text-green-600 mb-4">1 in 3</h3>
                        <p className="text-xl text-gray-700">nursing home residents experience clinically significant depression.</p>
                    </div>

                    {/* Statistic 2: Isolation */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <h3 className="text-5xl font-bold text-green-600 mb-4">50+%</h3>
                        <p className="text-xl text-gray-700">cases of depression in nursing homes go unrecognized.</p>
                    </div>

                    {/* Statistic 3: Mental Health */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <h3 className="text-5xl font-bold text-green-600 mb-4">$140,000</h3>
                        <p className="text-xl text-gray-700">needed for a year of nursing home</p>
                    </div>

                    {/* Statistic 4: Lack of Support */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <h3 className="text-5xl font-bold text-green-600 mb-4">42.9%</h3>
                        <p className="text-xl text-gray-700">of depressed nursing home residents are diagnosed, and fewer receive treatment.</p>
                    </div>
                </div>
                {/* CTA Section */}
                <div className="mt-12">
                    <p className="text-gray-700 mb-4">
                        Together, we can make a difference. Join us in addressing these challenges.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Statistics;