import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
        {/* Logo / App name */}
        <h1 className="text-xl font-bold">
          Insider<span className="text-blue-600">Jobs</span>
        </h1>

        {/* Social icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} InsiderJobs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
