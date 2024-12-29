import Image from 'next/image';

const Hero = () => {
    return (
        <section className="bg-white relative overflow-hidden h-[80vh] flex items-center justify-center">
            {/* Optional Background Image (Uncomment and replace src if needed) */}
            {/* <div className="absolute inset-0 w-full h-full opacity-20">
        <Image
          src="/hero-background.jpg"
          alt="Elderly people smiling"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div> */}

            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-600 mb-4 md:mb-6 leading-tight"> {/* Adjusted margin and leading */}
                    One4All Foundation
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-red-600 mb-8 md:mb-10 leading-tight"> {/* Adjusted margin and leading */}
                    Radiating Kindness and Joy to Our Elders
                </h2>
                <div className="flex justify-center space-x-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg text-lg"> {/* Adjusted font weight and size */}
                        Learn More
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg text-lg"> {/* Adjusted font weight and size */}
                        Donate
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;