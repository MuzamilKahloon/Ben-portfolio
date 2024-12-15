import React from "react";
import Navbar from "../components/Navbar";
import profile from "../../public/img/profile.jpg"; // Profile image
import { FiMail } from "react-icons/fi"; // Email Icon
import { FaLinkedin, FaGithub } from "react-icons/fa"; // LinkedIn & GitHub Icons
import { BsTwitter } from "react-icons/bs"; // Bluesky (alt) Icon
import { SiOrcid, SiZotero, SiGooglescholar } from "react-icons/si"; // ORCID, Zotero, Scholar
import Footer from "../components/Footer";
import { ThemeProvider } from "../constants/ThemeContext";
const Home = () => {
  return (
    <ThemeProvider>
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <div className="flex flex-col items-center min-h-screen mt-10 bg-white">
        <div className="flex flex-col items-center justify-center px-4 mt-12 text-center">
          {/* Profile Image */}
          <img
            src={profile}
            alt="Ben Jarman"
            className="object-cover rounded-full shadow-lg h-60 w-60"
          />

          {/* Welcome Text */}
          <h1 className="mt-6 text-4xl font-bold text-gray-800">Welcome</h1>
          <p className="mt-2 text-lg font-semibold text-gray-700">
            Ben Jarman’s homepage
          </p>

          {/* Description */}
          <div className="max-w-3xl mt-6 text-lg font-normal leading-relaxed text-gray-900">
            <p>
              I am a criminologist and prison researcher, currently working on
              parole and prison release mechanisms.
            </p>
            <p className="mt-4">
              My work is ultimately driven by curiosity: about how people
              survive and (sometimes) find positive, redemptive experiences,
              when they are forced by a serious conviction to spend a large part
              of their lives in prison. To me, this is a question of enduring
              human interest, relevant beyond the fields of criminology and
              criminal justice policy.
            </p>
            <p className="mt-4">
              Click on the ‘About’ link above to read more about my work. Use
              the links below to make contact, including for help accessing
              publications.
            </p>
          </div>
        </div>

        {/* Contact Icons Section */}
        <div className="flex flex-wrap justify-center gap-4 pt-6 mt-16 border-t border-gray-300">
        {/* Email */}
          <a
            href="mailto:someone@example.com"
            className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md text-gray-500 hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
          >
            <FiMail size={16} />
            <span>Email</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md text-gray-500 hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
          >
            <FaLinkedin size={16} />
            <span>LinkedIn</span>
          </a>
          {/* Bluesky */}
          <a
            href="https://bluesky.social"
            className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md text-gray-500 hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
          >
            <BsTwitter size={16} />
            <span>Bluesky</span>
          </a>
          {/* ORCID */}
          <a
            href="https://orcid.org"
            className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md text-gray-500 hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
          >
            <SiOrcid size={16} />
            <span>ORCiD</span>
          </a>
          {/* Zotero */}
          <a
            href="https://zotero.org"
            className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md text-gray-500 hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
          >
            <SiZotero size={16} />
            <span>Zotero</span>
          </a>
          {/* Google Scholar */}
          <a
            href="https://scholar.google.com"
            className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md text-gray-500 hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
          >
            <SiGooglescholar size={16} />
            <span>Google Scholar</span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com"
            className="flex items-center space-x-2 px-3 py-2 border border-gray-500 rounded-md text-gray-500 hover:text-[#18bc9c] hover:border-[#18bc9c] transition"
          >
            <FaGithub size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
    </ThemeProvider>
  );
};

export default Home;
