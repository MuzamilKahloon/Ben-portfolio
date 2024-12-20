import React from "react";
import Footer from "../components/Footer";
import { FiMail } from "react-icons/fi"; // Email Icon
import { FaLinkedin, FaGithub } from "react-icons/fa"; // LinkedIn & GitHub Icons
import { BsTwitter } from "react-icons/bs"; // Bluesky (alt) Icon
import { SiOrcid, SiZotero, SiGooglescholar } from "react-icons/si"; // ORCID, Zotero, Scholar
import { useTheme } from "../constants/ThemeContext"; // Import useTheme hook

const Home = () => {
  const { theme } = useTheme(); // Access the current theme from context

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      {/* Add padding to compensate for the fixed navbar */}
      <div className="pt-16">
        {/* Content Section */}
        <div className="container flex flex-col items-center min-h-screen">
          <div className="flex flex-col items-center justify-center px-4 mt-12 text-center">
            {/* Profile Image */}
            <img
              src="/img/profile.jpg" // Use absolute path from 'public' folder
              alt="Ben Jarman"
              className="object-cover rounded-full shadow-lg h-60 w-60"
            />

            {/* Welcome Text */}
            <h1 className="mt-6 text-4xl font-bold">Welcome</h1>
            <p className="mt-2 text-lg font-semibold">
              Ben Jarman’s homepage
            </p>

            {/* Description */}
            <div className="max-w-3xl mt-6 text-lg font-normal leading-relaxed">
              <p>
                I am a criminologist and prison researcher, currently working on
                parole and prison release mechanisms.
              </p>
              <p className="mt-4">
                My work is ultimately driven by curiosity: about how people
                survive and (sometimes) find positive, redemptive experiences,
                when they are forced by a serious conviction to spend a large
                part of their lives in prison. To me, this is a question of
                enduring human interest, relevant beyond the fields of
                criminology and criminal justice policy.
              </p>
              <p className="mt-4">
                Click on the ‘About’ link above to read more about my work. Use
                the links below to make contact, including for help accessing
                publications.
              </p>
            </div>
          </div>

          {/* Contact Icons Section */}
          <div className="flex flex-wrap justify-center gap-4 pt-6 mt-16 border-t border-gray-300 dark:border-gray-700">
            {/* Email */}
            <a
              href="mailto:example@example.com"
              className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
            >
              <FiMail size={16} />
              <span>Email</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
            >
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
            {/* Bluesky */}
            <a
              href="https://bluesky.social"
              className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
            >
              <BsTwitter size={16} />
              <span>Bluesky</span>
            </a>
            {/* ORCID */}
            <a
              href="https://orcid.org"
              className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
            >
              <SiOrcid size={16} />
              <span>ORCiD</span>
            </a>
            {/* Zotero */}
            <a
              href="https://zotero.org"
              className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
            >
              <SiZotero size={16} />
              <span>Zotero</span>
            </a>
            {/* Google Scholar */}
            <a
              href="https://scholar.google.com"
              className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
            >
              <SiGooglescholar size={16} />
              <span>Google Scholar</span>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
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
