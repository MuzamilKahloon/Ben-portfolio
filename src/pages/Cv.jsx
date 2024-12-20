import React, { useEffect } from "react";
import { useTheme } from "../constants/ThemeContext"; // Import useTheme hook
import cv from "../resume/ben.pdf";

const Cv = () => {
  const { theme } = useTheme(); // Access the current theme

  useEffect(() => {
    // Automatically open the PDF when the page loads
    window.open(cv, "_blank"); // Opens in a new tab
  }, []);

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <p className="text-lg font-semibold">
        If the document doesn't open,{" "}
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className={`underline ${
            theme === "dark" ? "text-teal-400 hover:text-teal-500" : "text-blue-500 hover:text-blue-700"
          }`}
        >
          click here to view the CV
        </a>
        .
      </p>
    </div>
  );
};

export default Cv;
