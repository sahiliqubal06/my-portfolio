import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaDocker } from "react-icons/fa"; // Import React Icons
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si"; // Import additional icons

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={48}/> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={48}/> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={48}/> },
  { name: "React", icon: <FaReact className="text-cyan-400" size={48}/> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" size={48} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={48}/> },
  { name: "Express", icon: <SiExpress className="text-gray-300" size={48}/> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={48}/> },
  { name: "Git", icon: <FaGit className="text-orange-400" size={48}/> },
  { name: "GitHub", icon: <FaGithub className="text-white" size={48}/> },
  { name: "Docker", icon: <FaDocker className="text-blue-300" size={48}/> },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Blurred Gradient Blob Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-[180px] opacity-25 z-0"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent z-0" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            Hi, I'm <span className="text-blue-400">Sahil Iqubal</span>
          </h1>
          <p className="text-md sm:text-lg md:text-xl mt-4 text-gray-100 font-light">
            A Full-Stack Developer crafting beautiful and functional web experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#about"
              className="px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-white text-white font-medium text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              My Projects
            </a>
          </div>
        </motion.div>

        {/* Sliding Skills Logos */}
        <div className="mt-14 w-full max-w-full overflow-hidden">
          <motion.div
            className="flex gap-10 py-4 w-[75vw] justify-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25, // Adjusted for smooth continuous movement
              ease: "linear",
            }}
            style={{
              display: "flex",
              flexWrap: "nowrap",
              width: "calc(100% * 2)", // Double the container width for smooth loop
            }}
          >
            {/* Repeat skills logos to ensure smooth continuous scroll */}
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="h-12 w-12 flex justify-center items-center text-white transition duration-300 hover:scale-110"
              >
                {skill.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
