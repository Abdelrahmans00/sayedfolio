import React from "react";
import { ReactComponent as Sun } from './images/Sun.svg';
import { ReactComponent as Moon } from "./images/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
        window.dispatchEvent(new Event("themeChange")); 
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
        window.dispatchEvent(new Event("themeChange")); 
    };

    const selectedTheme = localStorage.getItem("selectedTheme");

    if (selectedTheme === "dark") {
        setDarkMode();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;

