import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { FiAlertCircle } from "react-icons/fi"; // Report icon

const Footer = () => {
  return (
    <footer className="py-4 mt-10 text-sm text-gray-600 border-t border-gray-300">
      <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
        {/* Left Content */}
        <div>
          <p>
            Site content © 2003-2024 by Ben Jarman. All rights reserved unless
            otherwise noted.
          </p>
        </div>

        {/* Center Content */}
        <div className="flex items-center space-x-6 ">
          <a
            href="https://github.com"
            className="flex items-center space-x-1 hover:text-[#18bc9c] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={16} />
            <span>View source</span>
          </a>
          <a
            href="https://example.com/report"
            className="flex items-center space-x-1 hover:text-[#18bc9c] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiAlertCircle size={16} />
            <span>Report an issue</span>
          </a>
        </div>

        {/* Right Content */}
        <div className="text-gray-600 hover:text-[#18bc9c] transition">
          <a
            href="https://quarto.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <span className="underline">Quarto</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
