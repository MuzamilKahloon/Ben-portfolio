import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FiRss, FiSearch } from "react-icons/fi";
import { IoIosSwitch } from "react-icons/io";

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
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply the theme when darkMode state changes
  useEffect(() => {
    const html = document.documentElement; // Select the <html> element
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="w-full py-3 bg-[#113016] text-white dark:bg-black">
      <div className="container flex items-center justify-between px-6 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-tight">
          Ben <span className="text-gray-400">Jarman</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden space-x-12 lg:flex">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/publications" className="text-gray-300 hover:text-white">
              Publications
            </Link>
          </li>
          <li>
            <Link to="/cv" className="text-gray-300 hover:text-white">
              CV
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden space-x-6 lg:flex">
          <a href="#" className="text-gray-300 hover:text-white">
            <FiRss size={20} />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-gray-300 hover:text-[#18bc9c] transition focus:outline-none"
            aria-label="Toggle Theme"
          >
            <IoIosSwitch size={24} />
          </button>

          <a href="#" className="text-gray-300 hover:text-white">
            <FiSearch size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleNavbar} className="text-gray-300 lg:hidden">
          {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="flex flex-col items-center w-full p-6 bg-[#113016] dark:bg-black lg:hidden">
          <ul className="space-y-6 text-gray-300">
            <li>
              <Link to="/" onClick={toggleNavbar} className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleNavbar}
                className="hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={toggleNavbar}
                className="hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/publications"
                onClick={toggleNavbar}
                className="hover:text-white"
              >
                Publications
              </Link>
            </li>
            <li>
              <Link to="/cv" onClick={toggleNavbar} className="hover:text-white">
                CV
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
