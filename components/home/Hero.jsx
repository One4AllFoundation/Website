import Image from 'next/image';

const Hero = () => {
    return (
        <section className="bg-blue-400 relative overflow-hidden h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"> {/* Adjusted margin and leading */}
                    One4All Foundation
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-green-500 mb-8 md:mb-10 leading-tight"> {/* Adjusted margin and leading */}
                    Radiating Kindness and Joy to Our Elders
                </h2>
                <div className="flex justify-center space-x-4">
                </div>
            </div>
        </section>
    );
};

export default Hero;