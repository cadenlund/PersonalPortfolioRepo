import React from "react";
import { FaCode, FaRobot, FaDatabase, FaCog, FaCloud, FaPaintBrush } from "react-icons/fa";

const Skills: React.FC = () => {
    return (
        <div className="h-[800px] flex relative justify-center text-black dark:text-white mt-32">
            {/* Main CSS grid container */}
            <div className="grid gap-10 grid-cols-6 grid-rows-5 w-full h-full max-w-[1200px] relative">
                {/* Header in the middle three columns */}
                <div className="col-start-2 col-span-4 row-start-1 row-span-1 flex justify-center items-center">
                    <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-300">
                        Skills
                    </h2>
                </div>

                {/* Six Boxes with Top-Left Headings */}
                <div className="col-start-1 col-span-2 row-start-2 row-span-2 bg-gray-200 dark:bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-400 flex items-center">
                        <FaCode className="mr-2" /> Coding Languages
                    </h3>
                </div>
                <div className="col-start-3 col-span-2 row-start-2 row-span-2 bg-gray-200 dark:bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-400 flex items-center">
                        <FaRobot className="mr-2" /> ML Frameworks
                    </h3>
                </div>
                <div className="col-start-5 col-span-2 row-start-2 row-span-2 bg-gray-200 dark:bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-400 flex items-center">
                        <FaDatabase className="mr-2" /> Data Manipulation
                    </h3>
                </div>
                <div className="col-start-1 col-span-2 row-start-4 row-span-2 bg-gray-200 dark:bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-400 flex items-center">
                        <FaCog className="mr-2" /> ML Concepts
                    </h3>
                </div>
                <div className="col-start-3 col-span-2 row-start-4 row-span-2 bg-gray-200 dark:bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-400 flex items-center">
                        <FaCloud className="mr-2" /> Model Deployment
                    </h3>
                </div>
                <div className="col-start-5 col-span-2 row-start-4 row-span-2 bg-gray-200 dark:bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-400 flex items-center">
                        <FaPaintBrush className="mr-2" /> UI/UX Design
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Skills;
