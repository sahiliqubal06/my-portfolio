import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={50} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={50} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={50} /> },
  { name: "React", icon: <FaReact className="text-cyan-400" size={50} /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-300" size={40} />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={50} /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" size={50} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={50} /> },
  { name: "Git", icon: <FaGit className="text-orange-400" size={50} /> },
  { name: "GitHub", icon: <FaGithub className="text-white" size={50} /> },
  { name: "Docker", icon: <FaDocker className="text-blue-300" size={50} /> },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
          Hey there, I'm <span className="text-blue-400">Sahil Iqubal</span>
        </h1>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 font-medium max-w-2xl mx-auto">
          I’m a passionate Software Developer focused on creating scalable,
          efficient, and beautiful web applications. I thrive on turning complex
          challenges into clean, simple, and impactful solutions.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            My Projects
          </a>
        </div>
      </div>
      <div className="wrapper relative w-full max-w-6xl overflow-hidden h-20 sm:h-24 mt-14 mx-auto">
        <motion.div
          className="absolute flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          style={{ width: "200%" }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="h-20 w-20 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110"
            >
              {skill.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
