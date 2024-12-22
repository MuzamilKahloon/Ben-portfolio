import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { FiAlertCircle } from "react-icons/fi"; // Report icon
import { useTheme } from "../constants/ThemeContext"; // Import useTheme hook

const Footer = () => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <footer
      className={`py-6  border-t ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700 text-gray-400"
          : "bg-gray-100 border-gray-300 text-gray-600"
      }`}
    >
      <div className="container flex flex-col items-center justify-center gap-6 px-4 mx-auto sm:flex-row sm:justify-between">
        {/* Copyright Text */}
        <div className="text-center sm:text-left">
          <p>
            Site content © 2003-2024 by Ben Jarman. All rights reserved unless
            otherwise noted.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            className={`flex items-center space-x-2 hover:text-teal-500 transition ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
            <span>View source</span>
          </a>
          <a
            href="https://example.com/report"
            className={`flex items-center space-x-2 hover:text-teal-500 transition ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiAlertCircle size={18} />
            <span>Report an issue</span>
          </a>
        </div>

        {/* Powered By Section */}
        <div className="text-center sm:text-right">
          <a
            href="https://quarto.org"
            className={`hover:text-teal-500 transition underline ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Quarto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
