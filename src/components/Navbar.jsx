import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FiSearch, FiGlobe } from "react-icons/fi";
import { useTheme } from "../constants/ThemeContext";
import { useTranslation } from "react-i18next"; // Import useTranslation

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const languageMenuRef = useRef();

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev); // Proper toggle logic
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 z-50 w-full text-white bg-gray-600 shadow-md">
      <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="transition hover:text-teal-400">
            <span className="font-light">Paolo</span> <span className="font-bold">Sartorio</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`hidden space-x-8 lg:flex ${searchOpen ? "hidden" : ""}`}>
          {["about", "research", "publications", "cv"].map((key) => (
            <li key={key}>
              <Link to={`/${key}`} className="transition hover:text-teal-400">
                {capitalizeFirstLetter(t(key))}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Language Selector */}
          <div className="relative" ref={languageMenuRef}>
            <button
              onClick={toggleLanguageMenu}
              aria-label="Language Selector"
              className="flex items-center px-3 py-2 space-x-2 bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none"
            >
              <FiGlobe size={20} />
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 text-black bg-white rounded-md shadow-lg">
                <ul>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => changeLanguage("es")}
                  >
                    Spanish
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => changeLanguage("fr")}
                  >
                    French
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => changeLanguage("it")}
                  >
                    Italian
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="transition hover:text-teal-400 focus:outline-none"
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </button>

          {/* Search */}
          {searchOpen ? (
            <div className="flex items-center justify-between w-full">
              <input
                type="text"
                placeholder={t("search")}
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleNavbar}
            aria-label="Toggle Mobile Menu"
            className="transition lg:hidden hover:text-teal-400 focus:outline-none"
          >
            {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="bg-gray-700 lg:hidden">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {["about", "research", "publications", "cv"].map((key) => (
              <li key={key}>
                <Link
                  to={`/${key}`}
                  onClick={toggleNavbar}
                  className="text-white transition hover:text-teal-400"
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
