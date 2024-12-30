import React from "react";
import terms from '../constants/terms.pdf'
import policy from '../resume/policy.pdf'
const Footer = () => {
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
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href={terms}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/your-repo" // Replace with your GitHub repo URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              All Rights Reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
