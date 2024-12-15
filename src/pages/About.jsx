import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../../public/img/profile.jpg"; // Profile image
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiOrcid, SiZotero, SiGooglescholar } from "react-icons/si";

const About = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

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
          <h1 className="mt-6 text-3xl font-bold text-center text-gray-800">
            Ben Jarman
          </h1>
          <h2 className="text-lg text-center text-gray-600">
            About me and my work
          </h2>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="mailto:example@example.com"
              className="flex items-center px-3 py-2 space-x-1 text-gray-600 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FiMail size={18} />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center px-3 py-2 space-x-1 text-gray-600 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              className="flex items-center px-3 py-2 space-x-1 text-gray-600 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <BsTwitter size={18} />
              <span>Bluesky</span>
            </a>
            <a
              href="https://orcid.org"
              className="flex items-center px-3 py-2 space-x-1 text-gray-600 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiOrcid size={18} />
              <span>ORCiD</span>
            </a>
            <a
              href="https://zotero.org"
              className="flex items-center px-3 py-2 space-x-1 text-gray-600 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiZotero size={18} />
              <span>Zotero</span>
            </a>
            <a
              href="https://scholar.google.com"
              className="flex items-center px-3 py-2 space-x-1 text-gray-600 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <SiGooglescholar size={18} />
              <span>Google Scholar</span>
            </a>
            <a
              href="https://github.com"
              className="flex items-center px-3 py-2 space-x-1 text-gray-600 transition border rounded-md hover:text-teal-500 hover:border-teal-500"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="mt-8 lg:w-2/3 lg:mt-0">
          <p className="leading-relaxed text-gray-700">
            I am a Research Fellow at the University of Southampton, where I
            joined the{" "}
            <a href="#" className="text-teal-500 underline">
              Law School
            </a>{" "}
            in December 2024. My research to date has focused on long-term
            imprisonment and its broader implications for prisoners, the penal
            system, and for criminal justice in the UK more generally.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            I am interested by how people cope, and survive, when they are
            facing lengthy or lifelong punishment after a serious conviction.
            Partly, this is a question relating to the practical and emotional
            challenges of imprisonment, though this is well explored by existing
            research. What is less thoroughly researched is the moral dimensions
            of extreme sentences: the claim that they communicate society’s
            disapproval of the index offence, while conveying to the person
            convicted that they deserve to suffer for their actions, and ought
            to change.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            My doctorate, completed in 2024 at the Cambridge{" "}
            <a href="#" className="text-teal-500 underline">
              Prisons Research Centre
            </a>{" "}
            was jointly funded by{" "}
            <a href="#" className="text-teal-500 underline">
              UKRI
            </a>{" "}
            and{" "}
            <a href="#" className="text-teal-500 underline">
              Quakers in Britain
            </a>
            . It investigated the ethical experiences in prison of men serving
            mandatory life sentences for murder.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            Building on this foundation, my current work at Southampton explores
            the purpose and future of parole in England & Wales. It explores the
            intersections between the sociology of prisons and punishment, moral
            philosophy (specifically, penal theory), and criminal law.
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            I welcome contact and am interested in building networks at
            Southampton and beyond. If you find what I’m doing interesting and
            want to make contact, please get in touch and introduce yourself.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
