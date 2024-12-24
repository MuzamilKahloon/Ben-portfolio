import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FiSearch, FiGlobe } from "react-icons/fi";
import { useTheme } from "../constants/ThemeContext";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

// Utility function to capitalize the first letter
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  // Function to toggle the mobile drawer
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Function to toggle the search bar
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Function to change the language
  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false); // Close the language menu after selection
  };

  return (
    <nav className="absolute top-0 left-0 z-50 w-full text-white bg-gray-800 shadow-md">
      <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="transition hover:text-teal-400">
            <span className="font-light">Paolo</span>{" "}
            <span className="font-bold">Sartorio</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        {!searchOpen && (
          <ul className="hidden space-x-8 lg:flex">
            {["home", "about", "research", "publications", "cv"].map((key) => (
              <li key={key}>
                <Link to={`/${key}`} className="transition hover:text-teal-400">
                  {capitalizeFirstLetter(t(key))} {/* Capitalize translation */}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Language Selector */}
          {!searchOpen && (
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                aria-label="Language Selector"
                className="flex items-center px-3 py-2 space-x-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none"
              >
                <FiGlobe size={20} />
                
              </button>
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 text-black bg-white rounded shadow-lg">
                  <ul>
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => switchLanguage("en")}
                    >
                      English
                    </li>
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => switchLanguage("es")}
                    >
                      Spanish
                    </li>
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => switchLanguage("fr")}
                    >
                      French
                    </li>
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => switchLanguage("it")}
                    >
                      Italian
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Theme Toggle Button */}
          {!searchOpen && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="transition hover:text-teal-400 focus:outline-none"
            >
              {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          )}

          {/* Search Icon / Full-width Search Bar */}
          <div className="relative flex-grow">
            {searchOpen ? (
              <div className="flex items-center justify-between w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
                />
                <button
                  onClick={toggleSearch}
                  aria-label="Close Search"
                  className="ml-2 text-white hover:text-teal-400"
                >
                  <X size={24} />
                </button>
              </div>
            ) : (
              <button
                onClick={toggleSearch}
                aria-label="Search"
                className="transition hover:text-teal-400 focus:outline-none"
              >
                <FiSearch size={24} />
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          {!searchOpen && (
            <button
              onClick={toggleNavbar}
              aria-label="Toggle Mobile Menu"
              className="transition lg:hidden hover:text-teal-400 focus:outline-none"
            >
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && !searchOpen && (
        <div className="absolute left-0 w-full text-white bg-gray-800 lg:hidden top-full">
          <ul className="flex flex-col items-center p-4 space-y-4">
            {["home", "about", "research", "publications", "cv"].map((key) => (
              <li key={key}>
                <Link
                  to={`/${key}`}
                  onClick={toggleNavbar} // Close drawer on link click
                  className="transition hover:text-teal-400"
                >
                  {capitalizeFirstLetter(t(key))}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
