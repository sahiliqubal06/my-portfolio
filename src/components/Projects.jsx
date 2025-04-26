import { useEffect, useState } from "react";

// Project data
const projectData = [
  {
    title: "HospiCare",
    description:
      "A Hospital Management System built with the MERN stack to streamline hospital operations.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    liveLink: "https://hospi-care-live-link.com",
    image: "/src/assets/p1.png",
  },
  {
    title: "ogStore",
    description:
      "An online sneaker store with Razorpay checkout and product search powered by Algolia.",
    techStack: [ "React", "Node.js", "Express", "MongoDB", "Razorpay", "Algolia"],
    liveLink: "https://ogstore-live-link.com",
    image: "/src/assets/p1.png",
  },
  {
    title: "XYZ Company Website",
    description:
      "An informational website with admin management for a medical products company.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://xyz-company-website.com",
    image: "/src/assets/p1.png",
  },
  {
    title: "XYZ Company Website",
    description:
      "An informational website with admin management for a medical products company.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://xyz-company-website.com",
    image: "/src/assets/p1.png",
  },
  {
    title: "XYZ Company Website",
    description:
      "An informational website with admin management for a medical products company.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://xyz-company-website.com",
    image: "/src/assets/p1.png",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const shuffledProjects = [...projectData].sort(() => Math.random() - 0.5);
    setProjects(shuffledProjects);
  }, []);

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-10 md:mb-16 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
          Projects
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          A glimpse into some of my recent creations
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 rounded-2xl shadow-lg border border-neutral-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden flex flex-col cursor-pointer relative"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-44 md:h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Content section with padding - removed top padding */}
            <div className="pt-0 px-4 pb-4 md:px-6 md:pb-6 flex-grow flex flex-col ">
              {/* Project Title - removed top margin */}
              <h3 className="text-xl md:text-2xl font-bold mt-2 mb-2 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 ">
                {project.title}
              </h3>

              {/* Tech Stack - made smaller */}
              <div className="flex flex-wrap gap-1 mb-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-1.5 py-0.5 text-xs font-medium rounded-full bg-yellow-400 text-gray-800 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Description */}
              <p className="text-white mb-0 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
