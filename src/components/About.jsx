import React from "react";
import profilePic from "../assets/img1.jpg"; // Import your image from assets folder

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-20 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-500 overflow-hidden"
    >
      {/* Blurred Gradient Background Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-[180px] opacity-20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profilePic} // Use the imported image here
            alt="Sahil Iqubal"
            className="w-72 h-72 object-cover rounded-3xl shadow-xl border-4 border-white dark:border-gray-800"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Who I Am
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Sahil Iqubal</span>, a passionate Full-Stack Developer dedicated to building
            innovative and user-centric web applications. From crafting sleek interfaces to architecting backend logic,
            I thrive in delivering end-to-end digital solutions that solve real-world problems.
            <br /><br />
            With a deep appreciation for clean code, responsive design, and performance optimization, I continuously push myself to explore new technologies and create digital products that leave a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}
