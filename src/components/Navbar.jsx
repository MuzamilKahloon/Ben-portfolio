import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FiRss, FiSearch } from "react-icons/fi";
import { useTheme } from "../constants/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function from ThemeContext
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Function to toggle the mobile drawer
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Function to toggle the search bar
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav
      className="relative w-full py-3 mt-0 text-white"
      style={{ backgroundColor: "#113016" }}
    >
      <div className="flex items-center justify-between px-6 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-tight">
          <span className="font-light text-white">Ben</span>{" "}
          <span className="font-bold text-gray-400 dark:text-gray-500">Jarman</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden space-x-12 lg:flex">
          {["Home", "About", "Research", "Blog", "Publications", "CV"].map((link) => (
            <li key={link}>
              <Link
                to={`/${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="items-center hidden space-x-6 lg:flex">
          {/* RSS Feed Icon */}
          <a
            href="#"
            aria-label="RSS Feed"
            className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white"
          >
            <FiRss size={20} />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-gray-300 transition hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 focus:outline-none"
          >
            {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            aria-label="Search"
            className="text-gray-300 transition hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline-none"
          >
            <FiSearch size={24} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleNavbar}
          aria-label="Toggle Mobile Menu"
          className="text-gray-300 lg:hidden dark:text-gray-400"
        >
          {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="absolute left-0 flex items-center w-full p-3 bg-white shadow-md top-full dark:bg-gray-900">
          <FiSearch size={20} className="ml-3 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 text-gray-700 bg-transparent border-none dark:text-white focus:outline-none"
          />
          <button
            onClick={toggleSearch}
            className="mr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="flex flex-col items-center w-full px-6 py-4 bg-gray-800 dark:bg-black lg:hidden">
          <ul className="w-full space-y-6 text-center text-gray-300 dark:text-gray-400">
            {["Home", "About", "Research", "Blog", "Publications", "CV"].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  onClick={toggleNavbar}
                  className="block py-2 hover:text-white dark:hover:text-teal-400"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Icons */}
          <div className="flex justify-center mt-6 space-x-6">
            {/* RSS Feed Icon */}
            <a
              href="#"
              className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white"
            >
              <FiRss size={20} />
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="text-gray-300 transition hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 focus:outline-none"
            >
              {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            {/* Search Icon */}
            <button
              onClick={toggleSearch}
              aria-label="Search"
              className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white"
            >
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
