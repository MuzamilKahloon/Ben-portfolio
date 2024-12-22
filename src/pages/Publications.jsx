import React, { useState } from "react";
import Footer from "../components/Footer";
import {
  publications,
  publicationCategories,
  publicationNote,
} from "../constants";
import { useTheme } from "../constants/ThemeContext"; // Import useTheme hook

const Publications = () => {
  const { theme } = useTheme(); // Access theme from context
  const [sortBy, setSortBy] = useState("latest"); // State for sorting option

  // Sorting Logic
  const sortedPublications = [...publications].sort((a, b) => {
    if (sortBy === "latest") return new Date(b.date) - new Date(a.date); // Latest first
    if (sortBy === "oldest") return new Date(a.date) - new Date(b.date); // Oldest first
    if (sortBy === "popular") return b.views - a.views; // Most Popular (views property)
    return 0;
  });

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      {/* Publications Container */}
      <div className="container flex flex-col gap-8 px-8 py-8 mx-auto md:flex-row">
        {/* Main Content (70%) */}
        <div className="w-full md:w-2/3">
          {/* Publications Title */}
          <h1 className="mb-6 text-4xl font-bold">Publications</h1>

          {/* Note Section */}
          <div
            className={`p-6 mb-6 border rounded-lg shadow-md ${
              theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xl font-bold text-blue-600">ℹ️</span>
              <strong className="text-lg">{publicationNote.title}</strong>
            </div>
            <p className="leading-relaxed">{publicationNote.description}</p>
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center mb-4 space-x-4">
            <label className="font-semibold">Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-3 py-2 border rounded-md shadow-sm ${
                theme === "dark" ? "bg-gray-700 text-gray-200 border-gray-600" : "border-gray-300"
              } focus:ring focus:ring-teal-300`}
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          {/* Publications Table */}
          <div className="overflow-x-auto">
            <table
              className={`min-w-full border border-collapse table-auto ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <thead>
                <tr className={theme === "dark" ? "bg-gray-800" : "bg-gray-200"}>
                  <th className="p-2 text-left border">Date</th>
                  <th className="p-2 text-left border">Title</th>
                  <th className="p-2 text-left border">Subtitle</th>
                  <th className="p-2 text-left border">Keywords</th>
                  <th className="p-2 text-left border">Author</th>
                </tr>
              </thead>
              <tbody>
                {sortedPublications.map((pub) => (
                  <tr
                    key={pub.id}
                    className={`hover:${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <td className="p-2 border">{pub.date}</td>
                    <td className="p-2 border">
                      <a
                        href={pub.link}
                        className="text-teal-600 underline hover:text-teal-800"
                      >
                        {pub.title}
                      </a>
                    </td>
                    <td className="p-2 border">{pub.subtitle}</td>
                    <td className="p-2 border">{pub.keywords}</td>
                    <td className="p-2 border">{pub.authors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar (30%) */}
        <aside className="w-full md:w-1/3">
          {/* Categories Section */}
          <div
            className={`p-4 border rounded-lg shadow-sm ${
              theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
            }`}
          >
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              {publicationCategories.map((category) => (
                <li
                  key={category.id}
                  className="cursor-pointer hover:text-teal-500"
                >
                  {category.name} ({category.count})
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Publications;
