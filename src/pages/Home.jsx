import React from "react";
import Navbar from "../components/Navbar"; // Use Navbar Component
import Footer from "../components/Footer";
import { FiMail } from "react-icons/fi"; // Email Icon
import { FaLinkedin } from "react-icons/fa"; // LinkedIn Icon
import { SiOrcid, SiZotero, SiGooglescholar } from "react-icons/si"; // ORCID, Zotero, Scholar
import { useTheme } from "../constants/ThemeContext"; // Import useTheme hook
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Home = () => {
  const { theme } = useTheme(); // Access the current theme and toggle function from context
  const { t } = useTranslation(); // Access translation function

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Include Navbar Component */}
      <Navbar />

      {/* Add padding to compensate for the fixed navbar */}
      <div className="pt-16">
        {/* Content Section */}
        <div className="container flex flex-col items-center min-h-screen mb-20">
          <div className="flex flex-col items-center justify-center px-4 mt-12 text-center">
            {/* Profile Image */}
            <img
              src="/img/about1.jpg" // Use absolute path from 'public' folder
              alt={t("profile_alt", "Profile picture of Ben Jarman")}
              className="object-cover shadow-lg rounded-xl h-60 w-60"
            />

            {/* Welcome Text */}
            <h1 className="mt-6 text-4xl font-bold">{t("welcome", "Welcome")}</h1>
            <p className="mt-2 text-lg font-semibold">
              {t(
                "commitment_text",
                "Experience Matters: A Commitment to Justice and Human Rights"
              )}
            </p>

            {/* Description */}
            <div className="max-w-3xl mt-6 text-lg font-normal leading-relaxed">
              <p>
                {t(
                  "experience_description",
                  "With over 15 years of experience as a criminal defense attorney, 5 years as a law professor, and a growing focus on comparative criminal law and human rights, I bring a unique perspective to the pursuit of justice."
                )}
              </p>
              <p className="mt-4">
                {t(
                  "explore_website",
                  "Explore my website to learn more about my work, my research on comparative criminal law, and my efforts to promote justice on a global scale."
                )}
              </p>
            </div>
          </div>

          {/* Contact Icons Section */}
          <div className="flex flex-wrap justify-center gap-4 pt-6 mt-16 border-t border-gray-300 dark:border-gray-700">
            {/* Email */}
            <a
              href="mailto:example@example.com"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FiMail size={16} />
              <span>{t("email", "Email")}</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FaLinkedin size={16} />
              <span>{t("linkedin", "LinkedIn")}</span>
            </a>
            {/* ORCID */}
            <a
              href="https://orcid.org"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiOrcid size={16} />
              <span>{t("orcid", "ORCID")}</span>
            </a>
            {/* Zotero */}
            <a
              href="https://zotero.org"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiZotero size={16} />
              <span>{t("zotero", "Zotero")}</span>
            </a>
            {/* Google Scholar */}
            <a
              href="https://scholar.google.com"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiGooglescholar size={16} />
              <span>{t("google_scholar", "Google Scholar")}</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
