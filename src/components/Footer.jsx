// src/components/Footer.jsx

import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { FiAlertCircle } from "react-icons/fi"; // Report icon
import { Link } from "react-router-dom"; // Import Link for routing
import { useTranslation } from "react-i18next"; // Import the translation hook
import paolo from '../resume/paolo.pdf'; // Import the PDF file

const Footer = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-gray-400 bg-gray-800">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 mx-auto sm:flex-row">
        {/* Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm">
            © {currentYear} Paolo Sartorio |{" "}
            <Link to="/privacy-policy" className="hover:text-teal-400">
              {t("footer.privacy_policy", "Privacy Policy")}
            </Link>{" "}
            |{" "}
            <a
              href={paolo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              {t("footer.terms_conditions", "Terms & Conditions")}
            </a>{" "}
            | {t("footer.all_rights", "All Rights Reserved.")}
          </p>
        </div>

        {/* Links Section */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/your-repo" // Replace with your GitHub repo URL
            className="flex items-center space-x-1 text-sm transition hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <FaGithub size={16} />
            <span>{t("footer.view_source", "View Source")}</span>
          </a>
          <a
            href="https://example.com/report" // Replace with your issue reporting URL
            className="flex items-center space-x-1 text-sm transition hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Report an Issue"
          >
            <FiAlertCircle size={16} />
            <span>{t("footer.report_issue", "Report an Issue")}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
