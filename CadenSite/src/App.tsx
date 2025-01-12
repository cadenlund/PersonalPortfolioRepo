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
            <div className="relative min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 overflow-hidden">
                {/* Particles Background */}
                <div className="absolute inset-0 z-10">
                    <ParticlesBackground />
                </div>

                {/* Header */}
                <header className="relative z-10">
                    <Header />
                </header>

                {/* Main Content */}
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
