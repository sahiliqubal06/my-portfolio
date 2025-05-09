import React from "react";
import profilePic from "../assets/img3.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 sm:px-12 lg:px-20 text-white overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-xl">
            <img
              src={profilePic}
              alt="Sahil Iqubal"
              className="w-full h-full object-cover rounded-full border-4 border-gray-900 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left px-2">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
            About Me
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-medium">
            I’m{" "}
            <span className="text-blue-400 font-semibold">Sahil Iqubal</span>, a
            dedicated{" "}
            <span className="text-yellow-400 font-semibold">
              Full-Stack Developer
            </span>{" "}
            with a background in{" "}
            <span className="text-yellow-400 font-semibold">
              Computer Science and Engineering
            </span>
            .
            <br />
            <br />
            I specialize in designing and developing high-quality, scalable web
            applications that prioritize performance, accessibility, and
            user-centric design. From intuitive front-end interfaces to secure
            and efficient back-end systems, I bring a holistic approach to
            software development.
            <br />
            <br />
            My goal is to deliver impactful digital solutions through clean
            code, innovative thinking, and effective collaboration. I thrive in
            fast-paced environments, continuously expand my skill set, and enjoy
            turning complex challenges into seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
