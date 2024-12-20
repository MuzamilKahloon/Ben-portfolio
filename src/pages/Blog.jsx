import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts, blogCategories, blogNote } from "../constants";
import { useTheme } from "../constants/ThemeContext"; // Import useTheme hook

const Blog = () => {
  const { theme } = useTheme(); // Access theme from context
  const itemsPerPage = 5; // Number of blog posts per page
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("latest"); // State for sorting option

  // Sort Blog Posts
  const sortedPosts = [...blogPosts].sort((a, b) => {
    if (sortBy === "latest") return new Date(b.date) - new Date(a.date); // Latest
    if (sortBy === "oldest") return new Date(a.date) - new Date(b.date); // Oldest
    if (sortBy === "popular") return b.views - a.views; // Most Popular (views)
    return 0;
  });

  // Calculate total pages
  const totalPages = Math.ceil(sortedPosts.length / itemsPerPage);

  // Paginate Blog Posts
  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle Pagination Click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}>
     

      {/* Blog Container */}
      <div className="container flex flex-col gap-8 px-8 py-8 mx-auto md:flex-row">
        {/* Main Content (70%) */}
        <div className="w-full space-y-10 md:w-2/3">
          {/* Blog Title */}
          <h1 className="text-4xl font-bold">Blog</h1>

          {/* Note Section */}
          <div
            className={`p-6 border rounded-lg shadow-md ${
              theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xl font-bold text-blue-600">ℹ️</span>
              <strong className="text-lg">{blogNote.title}</strong>
            </div>
            <p className="leading-relaxed">
              {blogNote.description}{" "}
              <a
                href={blogNote.link.url}
                className="text-teal-500 underline hover:text-teal-600"
              >
                {blogNote.link.text}
              </a>
              .
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-4">
            <label className="font-semibold">Order By</label>
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

          {/* Blog Posts */}
          {paginatedPosts.map((post) => (
            <div
              key={post.id}
              className={`flex flex-col gap-6 pb-6 border-b md:flex-row ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              {/* Blog Content */}
              <div className="flex-1">
                <p className="text-sm">
                  {post.date} | {post.author}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
                {post.subtitle && <h3 className="text-lg">{post.subtitle}</h3>}
                <span
                  className={`inline-block px-2 py-1 mt-2 text-xs font-medium rounded ${
                    theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {post.category}
                </span>
                <p className="mt-3 leading-relaxed">{post.description}</p>
              </div>

              {/* Blog Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-40 rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}

          {/* Pagination Buttons */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageClick(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-teal-500 text-white"
                    : `${
                        theme === "dark"
                          ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`
                }`}
              >
                {index + 1}
              </button>
            ))}
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
              {blogCategories.map((category) => (
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

export default Blog;
