import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  return (
    <div
      className="relative min-h-screen overflow-hidden text-black dark:text-white transition-colors duration-500
        bg-white dark:bg-gray-900
        bg-gradient-to-br from-black/80 via-black/70 to-transparent
        before:content-[''] before:absolute before:top-[-200px] before:left-1/2 before:-translate-x-1/2 before:w-[1000px] before:h-[1000px]
        before:bg-gradient-to-r before:from-blue-400 before:via-purple-900 before:to-pink-00
        before:rounded-full before:blur-[180px] before:opacity-25 before:pointer-events-none
      "
    >
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
