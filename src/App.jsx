import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Publications from './pages/Publications';
import CV from './pages/CV';
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to load the saved theme from localStorage and apply initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark'); // Apply dark mode to the whole document
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark'); // Remove dark mode
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    // Update localStorage to save the user preference
    localStorage.setItem('theme', newMode ? 'dark' : 'light');

    // Toggle dark class on the html element to apply dark mode styles
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar remains constant */}
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

        {/* Body content, with background and text color based on dark mode */}
        <div
          className={`min-h-screen transition-colors duration-300 ${
            darkMode ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;