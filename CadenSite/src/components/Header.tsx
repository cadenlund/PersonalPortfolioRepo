import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedToggle from "./AnimatedToggle";

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const activeIndex = location.pathname === "/projects" ? 1 : 0;

    const handleNavLinkClick = (path: string) => {
        // Dispatch routeChange event to notify ParticlesBackground
        const event = new Event("routeChange");
        window.dispatchEvent(event);

        // Navigate to the new route after particles unmount
        setTimeout(() => {
            navigate(path);
        }, 0); // Match delay with ParticlesBackground remount
    };

    return (
        <header className="sticky top-0 bg-transparent z-50">
            <div className="px-12 py-4 flex justify-between items-center w-full">
                {/* Left: Logo */}
                <Link to="/" className="text-2xl font-bold">
                    <div>
                        <div className="font-medium tracking-tight">Caden Lund</div>
                        <div className="text-lg font-medium text-zinc-400">ML Engineer</div>
                    </div>
                </Link>

                {/* Center: Navigation Pill */}
                <nav
                    className="relative w-[200px] h-[50px]
                    bg-opacity-5 dark:bg-opacity-50 dark:bg-neutral-900
                    backdrop-blur-md py-3 px-4 rounded-full
                    border border-black border-opacity-15 dark:border-white dark:border-opacity-10
                    dark:shadow-md"
                >
                    <motion.div
                        animate={{ left: activeIndex === 0 ? "2%" : "50%" }}
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        className="absolute top-1 bottom-1 w-[48%] transition-colors duration-100
                         dark:bg-white opacity-10 dark:opacity-5 bg-neutral-900 rounded-full z-0 backdrop-blur-md"
                    />
                    <NavLink
                        to="/"
                        end
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavLinkClick("/");
                        }}
                        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-colors duration-100"
                        style={{ left: "25%" }}
                    >
                        <span className="font-normal">Work</span>
                    </NavLink>
                    <NavLink
                        to="/projects"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavLinkClick("/projects");
                        }}
                        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-colors duration-100"
                        style={{ left: "75%" }}
                    >
                        <span className="font-normal">Projects</span>
                    </NavLink>
                </nav>

                {/* Right: Dark Mode Toggle */}
                <div>
                    <AnimatedToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
