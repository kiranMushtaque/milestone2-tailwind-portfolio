import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto flex flex-col items-center">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4">
            <span className="text-xl">Kiran Portfolio</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-500 mb-4">
            © 2024 Kiran Personal Portfolio
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {/* Gmail */}
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kiranmushtaque373@gmail.com"
              target="_blank"
              className="text-gray-600 hover:text-red-600 transition-colors duration-300"
            >
              <MdEmail className="text-2xl" />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
              target="_blank"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/YOUR-GITHUB-USERNAME"
              target="_blank"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              <FaGithub className="text-2xl" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
