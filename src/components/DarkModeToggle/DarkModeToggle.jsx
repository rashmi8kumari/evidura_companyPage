import React, { useState, useEffect } from "react";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkModeToggle;

