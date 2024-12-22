import React from 'react';
import cv from '../../public/img/CV.webp';
import { useTheme } from '../constants/ThemeContext';
import Footer from '../components/Footer';

const Cv = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'
      }`}
    >
      {/* CV Image Section */}
      <div className="flex justify-center mt-10 mb-8">
        <img
          src={cv}
          alt="Curriculum Vitae"
          className="object-cover w-full max-w-2xl rounded-lg shadow-lg"
        />
      </div>

      {/* CV Overview Section */}
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Curriculum Vitae</h1>
        <p className="text-lg leading-relaxed">
          For a detailed overview of my academic and professional accomplishments, please view my full CV.
        </p>
      </div>

      {/* CV Content Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Education</h2>
        <ul className="space-y-8">
          <li>
            <h3 className="text-xl font-bold">Doctor of Philosophy (Ph.D.) in Law (cum laude)</h3>
            <p>Universidad Carlos III de Madrid (Spain)</p>
          </li>
          <li>
            <h3 className="text-xl font-bold">Master of Laws (LL.M.) in Trial Advocacy</h3>
            <p>Temple University James Beasley School of Law (US)</p>
            <ul className="pl-6 list-disc">
              <li>Public Interest Fellow</li>
            </ul>
          </li>
          <li>
            <h3 className="text-xl font-bold">Juris Doctor (J.D.)</h3>
            <p>William Mitchell College of Law (US)</p>
            <ul className="pl-6 list-disc">
              <li>Achievement in Public Service Award</li>
              <li>Public Interest Legal Fellow</li>
              <li>Editor-in-Chief, William Mitchell Law Raza Journal</li>
            </ul>
          </li>
          <li>
            <h3 className="text-xl font-bold">Bachelor of Arts (B.A.)</h3>
            <p>Major: Sociology</p>
            <p>Minor: Physics & Astronomy</p>
            <p>Brandon University (Canada)</p>
            <ul className="pl-6 list-disc">
              <li>Dean’s Honors List</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Footer Section */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default Cv;
