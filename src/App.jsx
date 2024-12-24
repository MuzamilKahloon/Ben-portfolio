import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./constants/ThemeContext";
import { useTranslation } from "react-i18next"; // Import i18next for translations
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import CV from "./pages/CV";

const App = () => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <ThemeProvider>
      <Router>
        {/* Navbar always rendered */}
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Redirect '/home' to '/' */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Other Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/cv" element={<CV />} />

          {/* Fallback for undefined routes */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold text-gray-800">
                  {t("404")} {/* Internationalized 404 message */}
                </h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
