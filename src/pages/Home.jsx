import React from 'react';
import img from '../../public/img/about1.jpg';
import Footer from '../components/Footer';
import { useTheme } from '../constants/ThemeContext';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { SiOrcid, SiZotero, SiGooglescholar } from 'react-icons/si';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 mt-16">
        {/* Image Section */}
        <div className="flex justify-center mb-12">
          <img src={img} alt="About" className="w-56 h-56 rounded-lg shadow-lg" />
        </div>

        {/* Content Section */}
        <div className="max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold">Welcome</h1>
          <p className="mb-6 text-lg leading-relaxed">
            Experience Matters: A Commitment to Justice and Human Rights
          </p>
          <p className="mb-6 text-base leading-relaxed">
            With over 15 years of experience as a criminal defense attorney, 5 years as a law professor, 
            and a growing focus on comparative criminal law and human rights, I bring a unique perspective 
            to the pursuit of justice. My professional journey has shaped my research, which seeks to bridge 
            the gap between theory and practice, creating impactful solutions for real-world legal challenges.
          </p>
          <p className="mb-6 text-base leading-relaxed">
            I believe that justice is not an abstract concept—it is a vital force that affects every individual, 
            every community, and every nation. As Martin Luther King Jr. famously wrote, "Injustice anywhere is 
            a threat to justice everywhere." This guiding principle fuels my work and my commitment to advocating 
            for human rights, both in the courtroom and through my academic research.
          </p>
          <p className="text-base leading-relaxed">
            Explore my website to learn more about my work, my research on comparative criminal law, and my efforts 
            to promote justice on a global scale.
          </p>
        </div>

        {/* Contact and Social Media Icons */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-6 pb-6 border-b border-gray-400">
            <a
              href="mailto:example@example.com"
              className={`flex items-center px-4 py-2 space-x-2 transition border rounded-md hover:text-teal-500 hover:border-teal-500 ${
                theme === 'dark' ? 'text-white border-white' : 'text-black border-black'
              }`}
            >
              <FiMail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              className={`flex items-center px-4 py-2 space-x-2 transition border rounded-md hover:text-teal-500 hover:border-teal-500 ${
                theme === 'dark' ? 'text-white border-white' : 'text-black border-black'
              }`}
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://orcid.org"
              className={`flex items-center px-4 py-2 space-x-2 transition border rounded-md hover:text-teal-500 hover:border-teal-500 ${
                theme === 'dark' ? 'text-white border-white' : 'text-black border-black'
              }`}
            >
              <SiOrcid size={20} />
              <span>ORCiD</span>
            </a>
            <a
              href="https://zotero.org"
              className={`flex items-center px-4 py-2 space-x-2 transition border rounded-md hover:text-teal-500 hover:border-teal-500 ${
                theme === 'dark' ? 'text-white border-white' : 'text-black border-black'
              }`}
            >
              <SiZotero size={20} />
              <span>Zotero</span>
            </a>
            <a
              href="https://scholar.google.com"
              className={`flex items-center px-4 py-2 space-x-2 transition border rounded-md hover:text-teal-500 hover:border-teal-500 ${
                theme === 'dark' ? 'text-white border-white' : 'text-black border-black'
              }`}
            >
              <SiGooglescholar size={20} />
              <span>Google Scholar</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
