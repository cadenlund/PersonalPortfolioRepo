// src/components/AnimatedToggle.tsx
import React, { useState, useEffect } from "react";
import "../styles/AnimatedToggleCss.css"; // Adjust the path as needed

const AnimatedToggle: React.FC = () => {
    // State to track if dark mode is enabled (true means dark mode)
    const [toggled, setToggled] = useState<boolean>(false);

    // On mount, check localStorage for a saved theme and update state and the <html> element accordingly
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setToggled(true);
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    // Handle click: toggle dark/light mode, update local storage, and toggle CSS class on <html>
    const handleClick = () => {
        const newToggle = !toggled;
        setToggled(newToggle);
        if (newToggle) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <div onClick={handleClick} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </div>
    );
};

export default AnimatedToggle;
