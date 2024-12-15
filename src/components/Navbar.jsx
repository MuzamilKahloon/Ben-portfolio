import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FiRss, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Function to toggle the mobile drawer
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Function to toggle the theme
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    // Apply the theme change to the entire document
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Initial theme setup on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  return (
    <nav className="w-full py-3 bg-[#113016] text-white dark:bg-black dark:text-white">
      <div className="container flex items-center justify-between px-6 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-tight">
          Ben <span className="text-gray-400 dark:text-gray-400">Jarman</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden space-x-12 lg:flex">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/publications" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
              Publications
            </Link>
          </li>
          <li>
            <Link to="/cv" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
              CV
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden space-x-6 lg:flex">
          <a href="#" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
            <FiRss size={20} />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-gray-300 hover:text-[#18bc9c] dark:text-gray-400 dark:hover:text-white transition focus:outline-none"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Moon size={24} /> : <Sun size={24} />}
          </button>

          <a href="#" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
            <FiSearch size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleNavbar} className="text-gray-300 lg:hidden dark:text-gray-400">
          {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="flex flex-col items-center w-full p-6 bg-[#113016] dark:bg-black lg:hidden">
          <ul className="space-y-6 text-gray-300 dark:text-gray-400">
            <li>
              <Link to="/" onClick={toggleNavbar} className="hover:text-white dark:hover:text-white">
                Home
              </Link>
            </li>
            {/* Other mobile menu items remain the same */}
          </ul>

          {/* Mobile Icons */}
          <div className="flex mt-6 space-x-6">
            <a href="#" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
              <FiRss size={20} />
            </a>

            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-[#18bc9c] dark:text-gray-400 dark:hover:text-white transition focus:outline-none"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Moon size={24} /> : <Sun size={24} />}
            </button>

            <a href="#" className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white">
              <FiSearch size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;