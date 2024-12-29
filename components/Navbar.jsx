"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // Import useState

const Navbar = () => {
    const navItems = ['Home', 'Stories', 'Blogs', 'Our Story'];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-20 bg-white shadow-md transition-transform duration-300 ease-in-out`} // Added background and shadow
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image className="rounded" src="/logo.png" alt="Logo" width={60} height={60} />
                    </Link>
                </div>
                <div className="hidden lg:flex flex-grow justify-center">
                    <ul className="flex space-x-6">
                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="inline-block p-2 px-4 font-semibold text-xl text-gray-800 hover:text-green-600" // Added text color
                                >
                                    <span>{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:hidden">
                    {/* Hamburger Menu Button */}
                    <button onClick={toggleMobileMenu} className="focus:outline-none text-gray-800 hover:text-green-600">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-full left-0 w-full bg-white shadow-md py-2 flex flex-col items-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="block py-2 px-4 w-full text-center text-gray-800 hover:bg-gray-100 hover:text-green-600"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;