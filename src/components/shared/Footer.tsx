import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"; // React Icons for social media, phone, and email

const Footer = () => {
  return (
    <footer
      className="py-4"
      style={{
        color: "var(--footer-text)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        {/* Left Section */}
        <div className="order-3 md:order-1 text-lg font-light">
          © 2025 by Pallab Kumar Sarker
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4 order-1 md:order-2">
          <div className="flex gap-2 items-center">
            <FaPhone className="text-lg" /> {/* Phone icon */}
            <h3 className="text-center text-lg font-light">+8801521577820</h3>
          </div>
          <div className="flex gap-2 items-center mt-4 mb-2 md:m-0">
            <FaEnvelope className="text-lg" /> {/* Email icon */}
            <h3 className="text-center text-lg font-light">
              pallabkumar26@gmail.com
            </h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-3 order-1 md:order-3 items-center">
          <FaFacebook className="cursor-pointer hover:text-gray-600" />
          <FaTwitter className="cursor-pointer hover:text-gray-600" />
          <FaLinkedin className="cursor-pointer hover:text-gray-600" />
          <FaInstagram className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
