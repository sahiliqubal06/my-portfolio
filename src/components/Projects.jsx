import { useEffect, useState } from "react";

// Project data (with images and live links)
const projectData = [
  {
    title: "HospiCare",
    description:
      "A Hospital Management System built with the MERN stack to streamline hospital operations.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    liveLink: "https://hospi-care-live-link.com",
    image: "/path/to/hospi-care-image.jpg", // Add your project image here
  },
  {
    title: "ogStore",
    description:
      "An online sneaker store with Razorpay checkout and product search powered by Algolia.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Algolia",
    ],
    liveLink: "https://ogstore-live-link.com",
    image: "/path/to/ogstore-image.jpg", // Add your project image here
  },
  {
    title: "XYZ Company Website",
    description:
      "An informational website with admin management for a medical products company.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://xyz-company-website.com",
    image: "/path/to/xyz-company-image.jpg", // Add your project image here
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Shuffle the project data array
    const shuffledProjects = projectData.sort(() => Math.random() - 0.5);
    setProjects(shuffledProjects);
  }, []);

  return (
    <section id="projects" className="py-20 text-center relative z-10">
      {/* Background Blur Effect */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-[180px] opacity-20 z-0"></div> */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-[180px] opacity-25 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent z-0" />
      <h2 className="text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        Projects
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
        Here are some of my recent projects.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
          >
            {/* Project Image */}
            <div className="mb-4 overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105"
              />
            </div>

            {/* Project Name */}
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-3 mb-4">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-500 hover:to-purple-500 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Live Demo Link */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
