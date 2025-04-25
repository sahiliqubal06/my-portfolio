import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
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

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
  { name: "Webpack", icon: <SiWebpack className="text-indigo-400" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Blur Effect */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-[180px] opacity-20 z-0" /> */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-[180px] opacity-25 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent z-0" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <span className="text-lg font-medium text-gray-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
