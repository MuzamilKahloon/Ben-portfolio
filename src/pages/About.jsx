import React from "react";
import Footer from "../components/Footer";
import profile from "../../public/img/about1.jpg"; // Profile image
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiOrcid, SiZotero, SiGooglescholar } from "react-icons/si";
import { useTheme } from "../constants/ThemeContext"; // Import useTheme hook

const About = () => {
  const { theme } = useTheme(); // Access the theme from context

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}>
      {/* About Section */}
      <div className="container px-4 py-12 mx-auto lg:flex lg:gap-12 lg:items-start">
        {/* Left Section: Profile, Name, Role, Social Icons */}
        <div className="flex flex-col items-center lg:w-1/3">
          {/* Profile Image */}
          <img
            src={profile}
            alt="Ben Jarman"
            className="object-cover w-64 h-64 rounded-lg shadow-lg"
          />

          {/* Name and Role */}
          <h1 className="mt-6 text-3xl font-bold text-center">Ben Jarman</h1>
          <h2 className="text-lg text-center">About me and my work</h2>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="mailto:example@example.com"
              className="flex items-center px-3 py-2 space-x-1 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FiMail size={18} />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center px-3 py-2 space-x-1 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              className="flex items-center px-3 py-2 space-x-1 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <BsTwitter size={18} />
              <span>Bluesky</span>
            </a>
            <a
              href="https://orcid.org"
              className="flex items-center px-3 py-2 space-x-1 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiOrcid size={18} />
              <span>ORCiD</span>
            </a>
            <a
              href="https://zotero.org"
              className="flex items-center px-3 py-2 space-x-1 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiZotero size={18} />
              <span>Zotero</span>
            </a>
            <a
              href="https://scholar.google.com"
              className="flex items-center px-3 py-2 space-x-1 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiGooglescholar size={18} />
              <span>Google Scholar</span>
            </a>
            <a
              href="https://github.com"
              className="flex items-center px-3 py-2 space-x-1 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="mt-8 lg:w-2/3 lg:mt-0">
          <p className="leading-relaxed">
            I did not enter the legal field with criminal law in mind. I initially saw the legal system as a well-oiled machine that ensured only the guilty would be punished. However, my experiences soon revealed a more painful reality. Our criminal justice system, though not without merit,{" "}
            <span className="text-teal-500 underline">disproportionately targets vulnerable populations</span>
            —those with limited resources who are often overrepresented behind bars and most in need of help. This systemic issue is not confined to the United States but is a{" "}
            <span className="text-teal-500 underline">global concern</span>. It was this disparity that led me to seek change.
          </p>

          <p className="mt-4 leading-relaxed">
            My work is driven by the belief that{" "}
            <span className="text-teal-500 underline">justice should be focused not just on punishment but on human rights and second chances</span>. We are more than the worst thing we have done, and{" "}
            <span className="text-teal-500 underline">how we treat the most derided individuals in our society is the truest reflection of who we are</span> as a people. My goal is to contribute to a justice system that acknowledges{" "}
            <span className="text-teal-500 underline">human dignity</span> and offers opportunities for{" "}
            <span className="text-teal-500 underline">redemption and rehabilitation</span>.
          </p>

          <p className="mt-4 leading-relaxed">
            I am a visiting professor at{" "}
            <span className="text-teal-500 underline">IE University Law School in Spain</span>, where I teach criminal law and human rights. I have also been teaching law and human rights at the{" "}
            <span className="text-teal-500 underline">University of Minnesota Law School</span> since 2020. In 2023, I completed my doctorate in Law at the{" "}
            <span className="text-teal-500 underline">Universidad Carlos III de Madrid</span>. My research focused on comparative studies of{" "}
            <span className="text-teal-500 underline">life sentence practices</span>, particularly the{" "}
            <span className="text-teal-500 underline">reimplementation of life sentences in Spain and the U.S.</span>, and the{" "}
            <span className="text-teal-500 underline">human rights implications</span> of such sentences.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
