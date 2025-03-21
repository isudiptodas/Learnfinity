import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme state with local storage value or default to false
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    return savedTheme ? JSON.parse(savedTheme) : false; // Default to light theme
  });

  // Update local storage whenever the theme changes
  const toggleTheme = () => {
    setDark((prevDark) => {
      const newDark = !prevDark;
      localStorage.setItem("darkTheme", JSON.stringify(newDark)); // Save new theme state
      return newDark;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
