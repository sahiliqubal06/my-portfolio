import React, { useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiWebpack,
} from "react-icons/si";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = {
    all: "All Skills",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & DevOps",
  };

  const skills = [
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-orange-500" />,
      category: "frontend",
      proficiency: 90,
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-blue-500" />,
      category: "frontend",
      proficiency: 85,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      category: "frontend",
      proficiency: 92,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      category: "frontend",
      proficiency: 88,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-300" />,
      category: "frontend",
      proficiency: 80,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      category: "backend",
      proficiency: 82,
    },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-300" />,
      category: "backend",
      proficiency: 78,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      category: "backend",
      proficiency: 75,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-400" />,
      category: "tools",
      proficiency: 85,
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-white" />,
      category: "tools",
      proficiency: 80,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-blue-300" />,
      category: "tools",
      proficiency: 70,
    },
    {
      name: "Webpack",
      icon: <SiWebpack className="text-indigo-400" />,
      category: "tools",
      proficiency: 65,
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of the technologies I work with and my proficiency level
            in each of them.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {Object.entries(skillCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === key
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-500"
            >
              <div className="text-4xl mb-4 transform transition-all duration-500 hover:rotate-12">
                {skill.icon}
              </div>

              <h3 className="text-lg font-medium mb-3">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-1 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">
                {skill.proficiency}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
