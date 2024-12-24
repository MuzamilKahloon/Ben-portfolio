import React, { useState } from "react";
import Footer from "../components/Footer";
import { publications, publicationCategories } from "../constants";
import { useTheme } from "../constants/ThemeContext";

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
      className={`min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Main Container */}
      <div className="container flex flex-col gap-8 px-8 py-8 mx-auto mt-16 mb-10 md:flex-row">
        {/* Main Content (70%) */}
        <div className="w-full md:w-2/3">
          <h1 className="mb-6 text-4xl font-bold">Publications</h1>

          <p className="mb-6 leading-relaxed text-justify">
            Welcome to the Publications section, where you can explore a curated collection of my work in various domains, including comparative criminal law, human rights, and restorative justice. This platform highlights my contributions to advancing legal scholarship, promoting human dignity, and rethinking traditional approaches to justice systems.
          </p>

          {/* Sorting Dropdown */}
          <div className="flex items-center mb-4 space-x-4">
            <label className="font-semibold">Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-3 py-2 border rounded-md shadow-sm ${
                theme === "dark"
                  ? "bg-black text-white border-gray-600"
                  : "bg-white border-gray-300"
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
                <tr className={theme === "dark" ? "bg-gray-700" : "bg-gray-200"}>
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
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-400 underline hover:text-teal-600"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <span className="text-teal-400">{pub.title}</span>
                      )}
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
          <div
            className={`p-4 border rounded-lg shadow-sm ${
              theme === "dark"
                ? "bg-black border-gray-700 text-white"
                : "bg-white border-gray-200 text-black"
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
