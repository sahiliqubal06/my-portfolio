import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiBootstrap,
  SiDaisyui,
  SiShadcnui,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGithub,
  SiPostman,
  SiFirebase,
  SiRender,
  SiVercel,
  SiC,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaPython,
  FaDatabase,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" size={50} />,
  },
  { name: "Python", icon: <FaPython className="text-yellow-300" size={50} /> },
  { name: "C", icon: <SiC className="text-blue-500" size={50} /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" size={50} /> },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-500" size={50} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-300" size={50} />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-600" size={50} />,
  },
  { name: "Daisy UI", icon: <SiDaisyui className="text-pink-400" size={50} /> },
  {
    name: "ShadCN UI",
    icon: <SiShadcnui className="text-indigo-400" size={50} />,
  },
  {
    name: "Material UI",
    icon: <MdDesignServices className="text-blue-400" size={50} />,
  },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" size={50} /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" size={50} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={50} /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300" size={50} />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={50} /> },
  { name: "SQL", icon: <SiMysql className="text-blue-600" size={50} /> },
  { name: "DBMS", icon: <FaDatabase className="text-gray-500" size={50} /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" size={50} /> },
  { name: "GitHub", icon: <SiGithub className="text-white" size={50} /> },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-500" size={50} />,
  },
  { name: "Docker", icon: <FaDocker className="text-blue-300" size={50} /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500" size={50} />,
  },
  { name: "Render", icon: <SiRender className="text-indigo-400" size={50} /> },
  { name: "Vercel", icon: <SiVercel className="text-white" size={50} /> },
  { name: "VS Code", icon: <FaCode className="text-blue-400" size={50} /> },
];

const titles = [
  "Software Engineer",
  "Developer",
  "Programmer",
  "Coder",
  "Web Developer",
  "Web Designer",
];

const HeroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle smooth scrolling to component
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="fixed top-1/3 left-0 flex flex-col items-center gap-4 p-2 bg-gray-800/80 rounded-r-lg shadow-lg z-50">
        <a
          href="https://www.linkedin.com/in/sahil-iqubal-2492871b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://github.com/sahiliqubal06"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://x.com/itsiqubal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-white transition-colors duration-300"
        >
          <FaTwitter size={22} />
        </a>
        <a
          href="https://drive.google.com/file/d/1MDOBOjRQty6IuekdYBTP3mOfnfcZ1QYi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download="SahilResume.pdf"
          className="text-green-400 hover:text-white transition-colors duration-300"
        >
          <FaDownload size={22} />
        </a>
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
          Hey there, I'm <span className="text-blue-400">Sahil Iqubal</span>
        </h1>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 font-medium max-w-2xl mx-auto">
          I'm a passionate{" "}
          <motion.span
            key={currentTitleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-amber-700 font-semibold"
          >
            {titles[currentTitleIndex]}
          </motion.span>
          , focused on building scalable, efficient, and visually engaging web
          applications. I thrive on turning complex challenges into impactful
          digital solutions.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("about")}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            My Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            My Skills
          </button>
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
