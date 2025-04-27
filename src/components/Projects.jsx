import { useEffect, useState } from "react";

const projectData = [
  {
    title: "PistisGroup: Medical Product Catalog & Admin Dashboard",
    description:
      "PistisGroup is a medical product catalog and admin dashboard for efficient management, allowing role-based CRUD operations and featuring dynamic galleries for engaging product displays.",
    techStack: [
      "React",
      "Swiper.js",
      "React Multi Carousel",
      "TailwindCSS",
      "Express",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Cloudinary",
      "DaisyUI",
    ],
    liveLink: "https://pistis-group.onrender.com",
    image: "/src/assets/p1.png",
  },
  {
    title: "Mern Authentication",
    description:
      "This MERN-based authentication platform provides secure features like signup, login, forget password, and reset password. It ensures seamless data handling and interaction, combining robust security and user accessibility.",
    techStack: [
      "React",
      "React Hot Toast",
      "Zustand",
      "mailtrap",
      "Framer Motion",
      "Express",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Dotenv",
      "TailwindCSS",
    ],
    liveLink: "https://hospi-care-live-link.com",
    image: "/src/assets/p2.png",
  },
  {
    title: "HospiCare: Hospital Management System",
    description:
      "A MERN stack application to streamline hospital operations. Manage appointments, doctor schedules, and departmental activities through an intuitive admin dashboard and user-friendly interface.",
    techStack: [
      "React",
      "React Multi Carousel",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "ESLint",
      "Validator",
    ],
    liveLink: "https://hospicare-hms-si.netlify.app",
    image: "/src/assets/p3.png",
  },
  {
    title: "ogStore",
    description:
      "An online sneaker store with Razorpay checkout and product search powered by Algolia.",
    techStack: [
      "React",
      "Node",
      "React Multi Carousel",
      "Express",
      "MongoDB",
      "Razorpay",
      "Algolia",
    ],
    liveLink: "https://ogstore-live-link.com",
    image: "/src/assets/p1.png",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const shuffledProjects = [...projectData].sort(() => Math.random() - 0.5);
    setProjects(shuffledProjects);
  }, []);

  const toggleDescription = (index) => {
    setProjects((prevProjects) =>
      prevProjects.map((project, i) =>
        i === index
          ? { ...project, showFullDescription: !project.showFullDescription }
          : project
      )
    );
  };

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="mb-10 md:mb-16 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
          Projects
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          A glimpse into some of my recent creations
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group hover:scale-105 transition-transform duration-300"
          >
            <div className="card card-compact bg-white/10 shadow-xl rounded-2xl overflow-hidden h-full min-h-[400px]">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <figure className="flex items-center justify-center h-48 w-full bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain h-full w-full"
                  />
                </figure>
                <h2 className="card-title text-teal-500 text-xl md:text-2xl text-center mt-2">
                  {project.title}
                </h2>
              </a>
              <div className="flex flex-wrap gap-1 my-2 justify-center">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-xs font-semibold rounded-full bg-yellow-400 text-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card-body flex flex-col justify-between">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.showFullDescription
                    ? project.description
                    : project.description.length > 150
                    ? `${project.description.substring(0, 150)}...`
                    : project.description}
                </p>
                {project.description.length > 150 &&
                  !project.showFullDescription && (
                    <button
                      className="text-teal-500 text-sm mt-2"
                      onClick={() => toggleDescription(index)}
                    >
                      View More
                    </button>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
