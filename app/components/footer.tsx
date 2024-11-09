import React from "react";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* logo */}
            <span className="ml-3 text-xl">Kiran Portfolio</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            @ 2024 Kiran Personal Portfolio
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="blank"
              href=" mailto:kiranmushtaque373@gamil.com"
              className="text-gray-500"
            >
              <MdEmail className="text-3xl hover:text-red-800" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
