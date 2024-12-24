import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiOrcid, SiZotero, SiGooglescholar } from "react-icons/si";
import { useTheme } from "../constants/ThemeContext";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <div className="pt-16">
        <div className="container flex flex-col items-center min-h-screen mb-20">
          <div className="flex flex-col items-center justify-center px-4 mt-12 text-center">
            <img
              src="/img/about1.jpg"
              alt={t("profile_alt")}
              className="object-cover shadow-lg rounded-xl h-60 w-60"
            />
            <h1 className="mt-6 text-4xl font-bold">{t("welcome")}</h1>
            <p className="mt-2 text-lg font-semibold">{t("commitment_text")}</p>
            <div className="max-w-3xl mt-6 text-lg font-normal leading-relaxed">
              <p>{t("experience_description")}</p>
              <p className="mt-4">{t("explore_website")}</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-6 mt-16 border-t border-gray-300 dark:border-gray-700">
            <a
              href="mailto:example@example.com"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FiMail size={16} />
              <span>{t("email")}</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FaLinkedin size={16} />
              <span>{t("linkedin")}</span>
            </a>
            <a
              href="https://orcid.org"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiOrcid size={16} />
              <span>{t("orcid")}</span>
            </a>
            <a
              href="https://zotero.org"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiZotero size={16} />
              <span>{t("zotero")}</span>
            </a>
            <a
              href="https://scholar.google.com"
              className="flex items-center px-3 py-2 space-x-2 transition border border-gray-500 rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiGooglescholar size={16} />
              <span>{t("google_scholar")}</span>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
