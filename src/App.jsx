// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./constants/ThemeContext";
import Homepage from "./pages/Home.jsx";
import About from "./pages/About";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import CV from "./pages/CV";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Set Homepage as default */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/cv" element={<CV />} />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold text-gray-800">Page not found</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
