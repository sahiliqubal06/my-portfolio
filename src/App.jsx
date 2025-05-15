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
      className={`
        relative min-h-screen overflow-hidden text-white transition-colors duration-500
        bg-gradient-to-br from-gray-900 via-black to-gray-900

        before:content-[''] before:absolute before:top-[-200px] before:left-1/2 before:-translate-x-1/2
        before:w-[800px] before:h-[800px]
        before:bg-gradient-to-r
          before:from-[#0f172a]  
          before:via-[#3b0764]    
          before:to-[#1e3a8a]     
        before:rounded-full before:blur-[220px] before:opacity-40 before:pointer-events-none
      `}
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
