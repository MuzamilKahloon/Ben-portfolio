import React from "react";
import { useTranslation } from "react-i18next"; // Import the translation hook
import paolo from "../resume/paolo.pdf"; // Import the Terms and Conditions PDF file
import policy from "../resume/policy.pdf"; // Import the Privacy Policy PDF file

const Footer = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#303030" }} className="py-4 text-white">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 mx-auto sm:flex-row">
        {/* Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm">
            © {currentYear} Paolo Sartorio |{" "}
            <a
              href={policy}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              {t("footer.privacy_policy", "Privacy Policy")}
            </a>{" "}
            |{" "}
            <a
              href={paolo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              {t("footer.terms_conditions", "Terms & Conditions")}
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/your-repo" // Replace with your GitHub repo URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              {t("footer.all_rights", "All Rights Reserved.")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
