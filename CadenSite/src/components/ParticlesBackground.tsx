// src/components/ParticlesBackground.tsx
import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Detect dark mode based on Tailwind's "dark" class
    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        checkDarkMode();

        const observer = new MutationObserver(() => checkDarkMode());
        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    const particleColor = isDarkMode ? "#ffffff" : "#333333"; // White for dark mode, dark gray for light mode
    const lineColor = isDarkMode ? "#ffffff" : "#333333"; // Line colors for contrast

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false }, // We control the canvas size manually
                particles: {
                    number: {
                        value: 50,
                        density: { enable: true, value_area: 500 },
                    },
                    color: { value: particleColor },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: lineColor,
                        opacity: 0.2,
                        width: 1,
                    },
                    opacity: { value: 0.5},
                    size: { value: 1, random: true },
                    move: { enable: true, speed: 0.7, outModes: { default: "out" } },
                },
                interactivity: {
                    detect_on: "window", // Detect mouse interactions globally
                    events: {
                        onhover: { enable: true, mode: "grab" }, // Particles grab to the cursor
                    },
                    modes: {
                        grab: { distance: 200, line_linked: { opacity: 0.8 } },
                    },
                },
                retina_detect: true,
                background: { color: "transparent" },
            }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0, // No negative z-index to avoid issues
            }}
        />
    );
};

const particlesInit = async (main: Engine): Promise<void> => {
    await loadFull(main);
};

export default ParticlesBackground;
