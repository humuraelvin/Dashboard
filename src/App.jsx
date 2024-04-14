import React, { createContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Profile from "./components/Profile";
import "./App.css";
import ReactSwitch from "react-switch";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="dashboard" id={theme}>
        <div className="modes">
          <MdOutlineLightMode />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <MdDarkMode />
        </div>
        <Sidebar />
        <div className="dashboard--content">
          <Content />
          <Profile />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
