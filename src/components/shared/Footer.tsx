import React from "react";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="text-black py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        {/* Left Section */}
        <div className="text-sm order-3 md:order-1">
          © 2035 by Pallab Kumar Sarker
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4 order-1 md:order-2">
          <div className="flex gap-2 items-center">
            <Phone fontSize="small" />
            <span>+8801521577820</span>
          </div>
          <div className="flex gap-2 items-center mt-4 mb-2">
            <Email fontSize="small" />
            <span>pallabkumar26@gmail.com</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-3 order-1 md:order-3">
          <Facebook className="cursor-pointer hover:text-gray-600" />
          <Twitter className="cursor-pointer hover:text-gray-600" />
          <LinkedIn className="cursor-pointer hover:text-gray-600" />
          <Instagram className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
