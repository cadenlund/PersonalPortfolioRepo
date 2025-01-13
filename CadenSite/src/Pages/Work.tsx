// src/pages/Work.tsx
import React from 'react';
import Hero from "../components/Hero.tsx";
import Skills from "../components/Skills.tsx";
import Footer from "../components/Footer.tsx";

const Work: React.FC = () => {
    return (
        <section className=" transition-colors duration-100 mt-16 ">
            <Hero />
            <Skills />
            <Footer />
        </section>
    );
};

export default Work;
