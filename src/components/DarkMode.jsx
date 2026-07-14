import React from "react";
import { useState, useEffect } from "react";
import Sun from "../assets/Sun.svg";
import Moon from "../assets/Moon.svg";
import "../DarkMode.css";

export const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);

    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img className="dark_mode_icon sun" src={Sun} alt="Light Mode" />
        <img className="dark_mode_icon moon" src={Moon} alt="Dark Mode" />
      </label>
    </div>
  );
};
