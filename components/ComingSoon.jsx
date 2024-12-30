import {FaInstagram, FaMedium, FaTiktok} from "react-icons/fa";
import Image from "next/image";

const ComingSoon = () => {
    return (
        <div
            className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/coming-soon-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className=" z-10 flex flex-col items-center justify-center text-center">
                <div>
                    <Image className="rounded-2xl mb-8"
                           src="/logo.png"
                           alt="OFA Logo"
                           width={180}
                           height={180}
                           priority={true}
                           quality={100}/>
                </div>
                <div className="mt-4">
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8">
                        Coming Soon!
                    </h1>
                    <div className=" text-gray-600 border-t">
                        <div className="mt-4">
                            <h1 className="text-3xl font-bold text-white">One for All Foundation</h1>
                            <p className="mt-4">We are a non-profit organization that seeks to provide care and support
                                for
                                the elderly in our society.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a
                            href="https://www.instagram.com/one_4_all_2024/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-4xl hover:text-green-700 transition duration-300"
                        >
                            <FaInstagram/>
                        </a>
                        <a
                            href="https://www.tiktok.com/@one4all2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-4xl hover:text-green-700 transition duration-300"
                        >
                            <FaTiktok/>
                        </a>
                        <a
                            href="https://medium.com/@andazcyrus9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-4xl hover:text-green-700 transition duration-300"
                        >
                            <FaMedium/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;