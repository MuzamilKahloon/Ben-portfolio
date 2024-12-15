import React, { useEffect } from "react";
import cv from "../resume/ben.pdf";

const Cv = () => {
  useEffect(() => {
    // Automatically open the PDF when the page loads
    window.open(cv, "_blank"); // Opens in a new tab
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-semibold text-gray-700">
        If the document doesn't open,{" "}
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          click here to view the CV
        </a>
        .
      </p>
    </div>
  );
};

export default Cv;
