import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts, blogCategories, blogNote, sortOptions } from "../constants";

const Blog = () => {
  const itemsPerPage = 5; // Number of blog posts per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  // Paginate Blog Posts
  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle Pagination Click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />

      {/* Blog Container */}
      <div className="container flex flex-col gap-8 px-8 py-8 mx-auto md:flex-row">
        {/* Main Content (70%) */}
        <div className="w-full space-y-10 md:w-2/3">
          {/* Blog Title */}
          <h1 className="text-4xl font-bold text-gray-800">Blog</h1>

          {/* Note Section */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-md bg-gray-50">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xl font-bold text-blue-600">ℹ️</span>
              <strong className="text-lg text-gray-800">{blogNote.title}</strong>
            </div>
            <p className="leading-relaxed text-gray-600">
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
            <label className="font-semibold text-gray-700">Order By</label>
            <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-teal-300">
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Blog Posts */}
          {paginatedPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-6 pb-6 border-b border-gray-200 md:flex-row"
            >
              {/* Blog Content */}
              <div className="flex-1">
                <p className="text-sm text-gray-500">
                  {post.date} | {post.author}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                {post.subtitle && (
                  <h3 className="text-lg text-gray-600">{post.subtitle}</h3>
                )}
                <span className="inline-block px-2 py-1 mt-2 text-xs font-medium text-gray-700 bg-gray-200 rounded">
                  {post.category}
                </span>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {post.description}
                </p>
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
                    : "bg-teal-700 text-white hover:bg-teal-600"
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
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Categories
            </h3>
            <ul className="space-y-2">
              {blogCategories.map((category) => (
                <li
                  key={category.id}
                  className="text-gray-600 cursor-pointer hover:text-gray-800"
                >
                  {category.name} ({category.count})
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
