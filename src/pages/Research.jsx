import React from "react";
import research from "../../public/img/research.jpeg";
import { useTheme } from "../constants/ThemeContext";
import Footer from "../components/Footer";

const Research = () => {
  const { theme } = useTheme(); // Access theme from context

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      {/* Content Section */}
      <div className="flex-grow px-6 py-12">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={research}
            alt="Research"
            className="object-cover w-full h-64 max-w-3xl rounded-lg shadow-lg"
          />
        </div>
        {/* Separator Line */}
        <div
          className={`mt-4 border-t ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        ></div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto mt-8">
          <p className="leading-relaxed">
            My research focuses on the intersection of{" "}
            <span className="text-teal-500 underline">comparative criminal law</span>,{" "}
            <span className="text-teal-500 underline">human rights</span>,{" "}
            <span className="text-teal-500 underline">restorative justice</span>, and{" "}
            <span className="text-teal-500 underline">parole systems</span>. I aim to
            bring transparency and accountability to the administration of punishment,
            particularly in the context of{" "}
            <span className="text-teal-500 underline">tough-on-crime policies</span> that
            prioritize lengthy incarceration over rehabilitation. These approaches,
            especially prevalent in the U.S., have consistently proven ineffective, yet
            they continue to dominate policy discussions. My work challenges these
            paradigms, emphasizing that there are lessons to be learned from systems
            beyond U.S. borders—lessons often overlooked by scholars who dismiss
            comparative studies between the U.S. and other countries due to perceived
            differences.
          </p>

          <p className="mt-4 leading-relaxed">
            In my doctoral research at the{" "}
            <span className="text-teal-500 underline">Universidad Carlos III de Madrid</span>,
            I demonstrated the significant value of comparing the Spanish and U.S. legal
            systems. Despite common assumptions, my findings provided novel insights into
            how the <span className="text-teal-500 underline">law-and-order approach</span>,
            which remains a hallmark of 1970s U.S. policies, is unlikely to bring about
            lasting change.
          </p>

          <p className="mt-8 text-xl font-semibold">
            My ongoing research has expanded into several new areas:
          </p>

          {/* Virtual Life Sentences */}
          <p className="mt-4 leading-relaxed">
            <span className="font-bold text-teal-500">Virtual Life Sentences:</span> While
            there is growing discourse on the death penalty and life sentences, the status
            of long-term fixed sentences is often less clear. Sentences with minimum terms
            that amount to virtual life sentences raise complex human rights questions.
          </p>

          {/* Human Rights and Vulnerable Prisoners */}
          <p className="mt-4 leading-relaxed">
            <span className="font-bold text-teal-500">Human Rights and Vulnerable Prisoners:</span>{" "}
            My research also delves into the human rights of prisoners, particularly those
            with mental health conditions. Recent rulings by international courts, including
            the <span className="text-teal-500 underline">European Court of Human Rights</span>,
            emphasize the importance of ensuring that prisoners are not subjected to
            inhumane conditions. These decisions underscore the need for{" "}
            <span className="text-teal-500 underline">alternatives to incarceration</span>,
            with a focus on rehabilitation and treatment rather than punishment.
          </p>

          <p className="mt-4 leading-relaxed">
            Through comparative analysis and interdisciplinary methods, I approach these
            issues from diverse perspectives, providing deeper insights into how legal
            systems can be reformed to prioritize{" "}
            <span className="text-teal-500 underline">human dignity</span>,{" "}
            <span className="text-teal-500 underline">rehabilitation</span>, and{" "}
            <span className="text-teal-500 underline">justice</span>.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Research;