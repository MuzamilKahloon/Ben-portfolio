import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { FiAlertCircle } from "react-icons/fi"; // Report icon

const Footer = () => {
  return (
    <footer className="py-6 text-gray-200 bg-gray-800">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 mx-auto sm:flex-row sm:justify-between">
        {/* Copyright Text */}
        <div className="text-center sm:text-left">
          <p>
            © Paolo Sartorio 2024 | Privacy Policy | Terms & Conditions | All
            Rights Reserved.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            className="flex items-center space-x-2 transition hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
            <span>View source</span>
          </a>
          <a
            href="https://example.com/report"
            className="flex items-center space-x-2 transition hover:text-teal-400"
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
            className="underline transition hover:text-teal-400"
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
