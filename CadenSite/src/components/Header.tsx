// src/components/Header.tsx
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedToggle from './AnimatedToggle';

const Header: React.FC = () => {
    // Set activeIndex: 0 for "Work" and 1 for "Projects"
    const location = useLocation();
    const activeIndex = location.pathname === '/projects' ? 1 : 0;

    return (
        <header className="sticky top-0 bg-transparent z-50">
            {/* Centered container with a limited width */}
            <div className=" px-8 py-4 flex justify-between items-center w-full">
                {/* Left: Logo */}
                <Link to="/" className="text-2xl font-bold">
                    <div>
                        <div className="font-normal tracking-tight">Caden Lund</div>
                        <div className="text-lg text-zinc-400">Ml Engineer</div>
                    </div>
                </Link>

                {/* Center: Navigation Pill */}
                <nav
                    className="relative w-[200px] h-[50px]
             bg-opacity-5  dark:bg-opacity-50 dark:bg-neutral-900
            backdrop-blur-md py-3 px-4 rounded-full
            border border-black border-opacity-15 dark:border-white dark:border-opacity-10
            dark:shadow-md"
                >
                    {/* Animated slider updated for visibility in light mode */}
                    <motion.div
                        animate={{ left: activeIndex === 0 ? '2%' : '50%' }}
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                        className="absolute top-1 bottom-1 w-[48%] dark:bg-white opacity-10 dark:opacity-5 bg-neutral-900 rounded-full z-0 backdrop-blur-md"
                    />

                    {/* Navlink for "Work" – centered at 25% */}
                    <NavLink
                        to="/"
                        end
                        style={{ left: '25%' }}
                        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2
                       z-10 transition-colors duration-200"
                    >
                        <span>Work</span>
                    </NavLink>

                    {/* Navlink for "Projects" – centered at 75% */}
                    <NavLink
                        to="/projects"
                        style={{ left: '75%' }}
                        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2
                       z-10 transition-colors duration-200"
                    >
                        <span>Projects</span>
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
