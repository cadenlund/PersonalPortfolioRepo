// src/components/Header.tsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import AnimatedToggle from "./AnimatedToggle"; // Import the toggle component

const Header: React.FC = () => {
    return (
        <header className=" text-black dark:text-white">
            <div className="px-[2rem] py-4 mt-3 flex justify-between items-center w-full ">
                {/* Left side: Logo and Navigation Links */}
                    <Link to="/" className="text-2xl font-bold">
                        CadenLund
                    </Link>
                    <nav className="dark:bg-white dark:bg-opacity-5 py-3.5 px-8 rounded-full backdrop-blur-md border-white border border-opacity-10">
                        <ul className="flex gap-11">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-yellow-300 font-semibold"
                                            : "hover:text-yellow-300"
                                    }
                                >
                                    Work
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-yellow-300 font-semibold"
                                            : "hover:text-yellow-300"
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                {/* Right side: Animated Dark Mode Toggle */}
                <div>
                    <AnimatedToggle/>
                </div>
            </div>
        </header>
    );
};

export default Header;
