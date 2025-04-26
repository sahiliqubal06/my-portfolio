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
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={60} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={60} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={60} /> },
  { name: "React", icon: <FaReact className="text-cyan-400" size={60} /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-300" size={60} />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={60} /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" size={60} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={60} /> },
  { name: "Git", icon: <FaGit className="text-orange-400" size={60} /> },
  { name: "GitHub", icon: <FaGithub className="text-white" size={60} /> },
  { name: "Docker", icon: <FaDocker className="text-blue-300" size={60} /> },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6 sm:px-8 md:px-12">
      <div className="relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
          Hey there, I'm <span className="text-blue-400">Sahil Iqubal</span>
        </h1>
        <p className="text-md sm:text-lg md:text-xl mt-6 text-gray-100 font-light max-w-3xl mx-auto">
          I’m a passionate Software Developer with a knack for creating
          scalable, efficient, and user-friendly web applications. My expertise
          lies in writing clean, maintainable code, always focused on delivering
          high-performance solutions. I thrive on turning complex challenges
          into simple, elegant solutions that make an impact.
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
      </div>

      <div className="wrapper relative w-full max-w-7xl overflow-hidden h-20 mt-14 mx-auto">
        <motion.div
          className="absolute flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          style={{
            width: "200%",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="h-20 w-20 flex justify-center items-center text-white transition duration-300 hover:scale-110"
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
