// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";
import ParticlesBackground from "./components/ParticlesBackground";

const App: React.FC = () => {
    return (
        <Router>
            <div className="relative min-h-screen transition-colors duration-200 ease-in-out bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
                {/* The ParticlesBackground is rendered via Portal, so it spans the entire document */}
                <ParticlesBackground />

                {/* Header – ensure it has a higher z-index (e.g., Tailwind’s z-50) */}
                <Header />

                {/* Main Content with a higher z-index so it appears above the particles */}
                <main className="relative z-10">
                    <Routes>
                        <Route path="/" element={<Work />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
