import Link from 'next/link';
import Image from 'next/image';
import {FaInstagram, FaMedium, FaTiktok} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright Notice */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image
                src="/logo.png" // Replace with your logo path
                alt="Company Logo"
                width={120}
                height={50}
              />
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} One4All. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-gray-400">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="text-sm">123 Main Street</p>
            <p className="text-sm">City, State, ZIP</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@example.com</p>
          </div>

          {/* Email Sign-up Form and Social Media Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4">Stay Connected</h3>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded-r hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
              <div className="flex justify-center space-x-4 mt-4">
                  <a
                      href="https://www.instagram.com/one_4_all_2024/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xl hover:text-green-700 transition duration-300"
                  >
                      <FaInstagram/>
                  </a>
                  <a
                      href="https://www.tiktok.com/@one4all2024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xl hover:text-green-700 transition duration-300"
                  >
                      <FaTiktok/>
                  </a>
                  <a
                      href="https://medium.com/@andazcyrus9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xl hover:text-green-700 transition duration-300"
                  >
                      <FaMedium/>
                  </a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;