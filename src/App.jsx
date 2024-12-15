import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Publications from "./pages/Publications";
import Cv from "./pages/Cv";
import { ThemeProvider } from "./constants/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
