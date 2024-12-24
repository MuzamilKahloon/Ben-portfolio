import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { FiAlertCircle } from "react-icons/fi"; // Report icon
import { useTranslation } from "react-i18next"; // Import the translation hook

const Footer = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <footer className="py-4 text-gray-400 bg-gray-800">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 mx-auto sm:flex-row">
        {/* Copyright Text */}
        <div className="text-center sm:text-left">
          <p className="text-sm">
            {t("footer.copyright", "© Paolo Sartorio 2024 | Privacy Policy | Terms & Conditions | All Rights Reserved.")}
          </p>
        </div>

        {/* Links Section */}
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            className="flex items-center space-x-1 text-sm transition hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={16} />
            <span>{t("footer.view_source", "View source")}</span>
          </a>
          <a
            href="https://example.com/report"
            className="flex items-center space-x-1 text-sm transition hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiAlertCircle size={16} />
            <span>{t("footer.report_issue", "Report an issue")}</span>
          </a>
        </div>

        {/* Powered By Section */}
        <div className="text-center sm:text-right">
          <a
            href="https://quarto.org"
            className="text-sm underline transition hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("footer.powered_by", "Powered by Quarto")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
