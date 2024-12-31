import React, { useState } from "react";
import Footer from "../components/Footer";
import { publications } from "../constants";
import { useTheme } from "../constants/ThemeContext";
import pub from "../../public/img/pub.jpg";

const Publications = () => {
  const { theme } = useTheme(); // Access theme from context
  const [sortBy, setSortBy] = useState("latest"); // State for sorting option

  // Sorting Logic
  const sortedPublications = [...publications].sort((a, b) => {
    if (sortBy === "latest") return new Date(b.date) - new Date(a.date); // Latest first
    if (sortBy === "oldest") return new Date(a.date) - new Date(b.date); // Oldest first
    if (sortBy === "popular") return b.views - a.views; // Most Popular
    return 0;
  });

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${pub})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Header Content */}
      <div className="relative z-10 px-4 py-16 text-center text-white">
        <h1 className="text-5xl font-extrabold">Publications</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg font-medium">
          This section highlights my academic publications, which explore
          critical issues in criminal justice, human rights, and punishment.
          Full texts of some works are available here, while others can be
          accessed through external links to open-access sources.
        </p>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 py-8 mx-auto lg:px-16">
        {/* Sorting Dropdown */}
        <div className="flex items-center mb-4 space-x-4 ml-14">
          <label className="text-lg font-bold text-white">Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-3 py-2 border rounded-md shadow-sm ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
            }`}
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {/* Publications Table */}
        <div className="overflow-x-auto">
          <table
            className={`w-full max-w-5xl mx-auto ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <thead>
              <tr
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <th className="p-4">Date</th>
                <th className="p-4">Title</th>
                <th className="p-4">Subtitle</th>
                <th className="p-4">Keywords</th>
                <th className="p-4">Author</th>
              </tr>
            </thead>
            <tbody>
              {sortedPublications.map((pub) => (
                <tr
                  key={pub.id}
                  className={`${
                    theme === "dark"
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <td className="p-4">{pub.date}</td>
                  <td className="p-4">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold underline ${
                          theme === "dark" ? "text-teal-400" : "text-teal-600"
                        }`}
                      >
                        {pub.title}
                      </a>
                    ) : (
                      <span
                        className={`font-semibold ${
                          theme === "dark" ? "text-teal-400" : "text-teal-600"
                        }`}
                      >
                        {pub.title}
                      </span>
                    )}
                  </td>
                  <td className="p-4">{pub.subtitle}</td>
                  <td className="p-4">{pub.keywords}</td>
                  <td className="p-4">{pub.authors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Publications;
