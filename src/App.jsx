import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./constants/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research"; // Research Page Component
import Blog from "./pages/Blog"; // Blog Page Component
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
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} /> {/* Added the Blog Route */}
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
