import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showParticles, setShowParticles] = useState(true); // Toggle particles for route changes
    const [fadeOpacity, setFadeOpacity] = useState(0); // Control fade-in effect

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

    // Trigger fade-in effect on initial load
    useEffect(() => {
        setTimeout(() => setFadeOpacity(1), 50); // Smooth fade-in after component mounts
    }, []);

    // Handle custom event to toggle particles on route change
    useEffect(() => {
        const handleRouteChange = () => {
            setShowParticles(false); // Temporarily hide particles
            setTimeout(() => {
                setShowParticles(true); // Re-mount particles after delay
                setFadeOpacity(0); // Start fade-in
                setTimeout(() => setFadeOpacity(1), 25); // Gradually increase opacity
            }, 190); // Wait 100ms before mounting particles
        };

        window.addEventListener("routeChange", handleRouteChange);
        return () => window.removeEventListener("routeChange", handleRouteChange);
    }, []);

    const particleColor = isDarkMode ? "#ffffff" : "#333333";
    const lineColor = isDarkMode ? "#ffffff" : "#333333";
    const lightModeOpacity = isDarkMode ? "0.3" : "0.7";

    return showParticles ? (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                particles: {
                    number: { value: 50, density: { enable: true, value_area: 700 } },
                    color: { value: particleColor },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: lineColor,
                        opacity: lightModeOpacity,
                        width: 1,
                    },
                    opacity: { value: 0.5 },
                    size: { value: 1, random: true },
                    move: { enable: true, speed: 0.7, outModes: { default: "out" } },
                },
                interactivity: {
                    detect_on: "window", // Detect mouse over the entire window
                    events: {
                        onhover: { enable: true, mode: "grab" }, // Enable grab effect on hover
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
                width: "100vw",
                height: "100vh",
                zIndex: 0,
                opacity: fadeOpacity, // Use state for fade effect
                transition: "opacity 0.3s ease-in-out", // Smooth fade transition
            }}
        />
    ) : null; // Hide particles during unmount
};

// Initialize particles
const particlesInit = async (main: Engine): Promise<void> => {
    await loadFull(main);
};

export default ParticlesBackground;
