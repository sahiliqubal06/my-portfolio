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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">
            About Me
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
            I’m{" "}
            <span className="text-blue-400 font-semibold">Sahil Iqubal</span>, a
            passionate{" "}
            <span className="text-yellow-400 font-semibold">
              Full-Stack Developer
            </span>{" "}
            who loves building elegant, performant, and accessible digital
            products.
            <br />
            <br />
            My mission is to create seamless web experiences that blend clean
            design with efficient code. Whether I'm crafting a responsive
            front-end or developing robust APIs, I’m always striving to make
            meaningful impact through technology.
            <br />
            <br />I enjoy collaborating with creative minds, constantly learning
            new tools, and pushing boundaries with every project I take on.
          </p>
        </div>
      </div>
    </section>
  );
}
