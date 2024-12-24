import React from "react";
import cv from "../../public/img/CV1.jpg"; // Use CV image as the background
import { useTheme } from "../constants/ThemeContext";
import Footer from "../components/Footer";

const Cv = () => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <div
      className={`flex flex-col min-h-screen bg-center bg-cover ${
        theme === "dark" ? "text-gray-200" : "text-gray-800"
      }`}
      style={{
        backgroundImage: `url(${cv})`, // Set the CV image as the background
        backgroundAttachment: "fixed", // Ensure the background stays fixed during scroll
      }}
    >
      {/* Overlay Section to Improve Readability */}
      <div
        className={`flex-grow ${
          theme === "dark"
            ? "bg-black bg-opacity-50" // Dark theme readability layer
            : "bg-white bg-opacity-70" // Light theme readability layer
        }`}
      >
        {/* CV Overview Section */}
        <div className="pt-10 mt-10 mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Curriculum Vitae</h1>
          <p className="text-lg leading-relaxed">
            For a detailed overview of my academic and professional
            accomplishments, please view my full CV.
          </p>
        </div>

        {/* CV Content Section */}
        <div
          className={`max-w-3xl p-8 mx-auto mb-12 rounded-xl shadow-md ${
            theme === "dark"
              ? "bg-gray-900 text-gray-200 border border-gray-700"
              : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <h2 className="mb-6 text-2xl font-semibold">Education</h2>
          <ul className="space-y-8">
            <li>
              <h3 className="text-xl font-bold">
                Doctor of Philosophy (Ph.D.) in Law (cum laude)
              </h3>
              <p>Universidad Carlos III de Madrid (Spain)</p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                Master of Laws (LL.M.) in Trial Advocacy
              </h3>
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
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Cv;
