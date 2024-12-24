import React from "react";
import Footer from "../components/Footer";
import profile from "../../public/img/about1.jpg"; // Profile image
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiOrcid, SiZotero, SiGooglescholar } from "react-icons/si";
import { useTheme } from "../constants/ThemeContext"; // Import useTheme hook

const About = () => {
  const { theme } = useTheme(); // Access the theme from context

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* About Section */}
      <div className="container px-4 py-12 mx-auto mt-10 mb-10 lg:flex lg:gap-12 lg:items-start">
        {/* Left Section: Profile, Name, Role, Social Icons */}
        <div className="flex flex-col items-center lg:w-1/3">
          {/* Profile Image */}
          <img
            src={profile}
            alt="Paolo Sartorio"
            className="object-cover w-64 h-64 rounded-lg shadow-lg"
          />

          {/* Name and Role */}
          <h2 className="mt-4 text-lg text-center">About me and my work</h2>

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
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="mt-8 lg:w-2/3 lg:mt-0">
          <p className="leading-relaxed text-justify">
            I did not enter the legal field with criminal law in mind. I
            initially saw the legal system as a well-oiled machine that ensured
            only the guilty would be punished. However, my experiences soon
            revealed a more painful reality. Our criminal justice system, though
            not without merit, disproportionately targets vulnerable
            populations—those with limited resources who are often
            overrepresented behind bars and most in need of help. This systemic
            issue is not confined to the United States but is a global concern.
            It was this disparity that led me to seek change.
          </p>

          <p className="mt-4 leading-relaxed text-justify">
            My work is driven by the belief that justice should be focused not
            just on punishment but on human rights and second chances. We are
            more than the worst thing we have done, and how we treat the most
            derided individuals in our society is the truest reflection of who
            we are as a people. My goal is to contribute to a justice system
            that acknowledges human dignity and offers opportunities for
            redemption and rehabilitation.
          </p>

          <p className="mt-4 leading-relaxed text-justify">
            I am a visiting professor at IE University Law School in Spain,
            where I teach criminal law and human rights. I have also been
            teaching law and human rights at the University of Minnesota Law
            School since 2020. In 2023, I completed my doctorate in Law at the
            Universidad Carlos III de Madrid. My research focused on comparative
            studies of life sentence practices, particularly the
            reimplementation of life sentences in Spain and the U.S., and the
            human rights implications of such sentences.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
