import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="relative min-h-screen overflow-hidden text-black dark:text-white transition-colors duration-500
        bg-white dark:bg-gray-900
        bg-gradient-to-br from-black/90 via-black/80 to-black/90
        before:content-[''] before:absolute before:top-[-200px] before:left-1/2 before:-translate-x-1/2 before:w-[800px] before:h-[800px]
        before:bg-gradient-to-r before:from-blue-400 before:via-indigo-600 before:to-cyan-400
        before:rounded-full before:blur-[220px] before:opacity-15 before:pointer-events-none
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
