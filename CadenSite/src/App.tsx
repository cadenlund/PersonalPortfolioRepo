// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
                <Header />
                <main className="flex-grow">
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
