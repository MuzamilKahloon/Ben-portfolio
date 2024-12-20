import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./constants/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Publications from "./pages/Publications";
import CV from "./pages/CV";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          {/* Redirect '/home' to '/' */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* Other Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/cv" element={<CV />} />
          {/* Fallback for undefined routes */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
