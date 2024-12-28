import React from "react";
import research from "../../public/img/research1.jpg";
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
      <div
        className="relative flex-grow h-full px-6 py-12 mt-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${research})` }}
      >
        {/* Text Content */}
        <div
          className={`relative max-w-4xl p-6 mx-auto rounded-lg shadow-lg ${
            theme === "dark"
              ? "bg-gray-900 bg-opacity-75 text-gray-200"
              : "bg-gray-100 bg-opacity-75 text-gray-800"
          }`}
        >
          <p className="leading-relaxed text-justify">
            My research focuses on the intersection of comparative criminal law,
            human rights, restorative justice, and parole systems. I aim to
            bring transparency and accountability to the administration of
            punishment, particularly in the context of tough-on-crime policies
            that prioritize lengthy incarceration over rehabilitation. These
            approaches, especially prevalent in the U.S., have consistently
            proven ineffective, yet they continue to dominate policy
            discussions. My work challenges these paradigms, emphasizing that
            there are lessons to be learned from systems beyond U.S. borders—
            lessons often overlooked by scholars who dismiss comparative studies
            between the U.S. and other countries due to perceived differences.
          </p>

          <p className="mt-4 leading-relaxed text-justify">
            In my doctoral research at the Universidad Carlos III de Madrid, I
            demonstrated the significant value of comparing the Spanish and U.S.
            legal systems. Despite common assumptions, my findings provided
            novel insights into how the law-and-order approach, which remains a
            hallmark of 1970s U.S. policies, is unlikely to bring about lasting
            change.
          </p>

          <p className="mt-8 text-xl font-semibold text-teal-500">
            My ongoing research has expanded into several new areas:
          </p>

          {/* Virtual Life Sentences */}
          <p className="mt-4 leading-relaxed text-justify">
            <span className="font-bold text-teal-500">Virtual Life Sentences:</span>{" "}
            While there is growing discourse on the death penalty and life
            sentences, the status of long-term fixed sentences is often less
            clear. Sentences with minimum terms that amount to virtual life
            sentences raise complex human rights questions.
          </p>

          {/* Human Rights and Vulnerable Prisoners */}
          <p className="mt-4 leading-relaxed text-justify">
            <span className="font-bold text-teal-500">
              Human Rights and Vulnerable Prisoners:
            </span>{" "}
            My research also delves into the human rights of prisoners,
            particularly those with mental health conditions. Recent rulings by
            international courts, including the European Court of Human Rights,
            emphasize the importance of ensuring that prisoners are not
            subjected to inhumane conditions. These decisions underscore the
            need for alternatives to incarceration, with a focus on
            rehabilitation and treatment rather than punishment.
          </p>

          <p className="mt-4 leading-relaxed text-justify">
            Through comparative analysis and interdisciplinary methods, I
            approach these issues from diverse perspectives, providing deeper
            insights into how legal systems can be reformed to prioritize human
            dignity, rehabilitation, and justice.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer className="mt-0" />
    </div>
  );
};

export default Research;
