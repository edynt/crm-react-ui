import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemePage = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Current Theme: {isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ThemePage;
