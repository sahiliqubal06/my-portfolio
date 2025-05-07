import { useState, useEffect } from "react";
import { X, ExternalLink, Github, Maximize2 } from "lucide-react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [modalProject, setModalProject] = useState(null);

  const projectData = [
    {
      title: "PistisGroup: Medical Product Catalog & Admin Dashboard",
      description:
        "PistisGroup is a medical product catalog and admin dashboard for efficient management, allowing role-based CRUD operations and featuring dynamic galleries for engaging product displays.",
      features: [
        "Role-based authentication system",
        "Dynamic product galleries",
        "Admin dashboard for product management",
        "CRUD operations for catalog items",
        "Responsive design for all devices",
      ],
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
      githubLink: "https://github.com/sahiliqubal06/Pistis-Group",
      image: p1,
    },
    {
      title: "ZestMeet- Real-Time Chat & Video App",
      description:
        "A full-stack real-time communication platform built using WebRTC, Socket.IO, and MongoDB, featuring live chat and secure video calling capabilities with a modern UI using Material UI.",
      features: [
        "One-on-one live chat and WebRTC video calls",
        "Real-time messaging with Socket.IO",
        "Authentication and user management",
        "Online/offline status indicators",
        "Modern UI built with Material UI (MUI)",
      ],
      techStack: [
        "React",
        "WebRTC",
        "Socket.IO",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt",
        "MUI (Material UI)",
        "Vite",
      ],
      liveLink: "https://zest-meet.onrender.com", 
      githubLink: "https://github.com/sahiliqubal06/zest-meet", 
      image: p4,
    },

    {
      title: "Mern Authentication",
      description:
        "This MERN-based authentication platform provides secure features like signup, login, forget password, and reset password. It ensures seamless data handling and interaction, combining robust security and user accessibility.",
      features: [
        "Secure user authentication",
        "Password reset functionality",
        "JWT token-based security",
        "Email notifications via Mailtrap",
        "Animated UI transitions",
      ],
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
      liveLink: "",
      githubLink: "https://github.com/sahiliqubal06/MERN_AUTHENTICATION",
      image: p2,
    },
    {
      title: "HospiCare: Hospital Management System",
      description:
        "A MERN stack application to streamline hospital operations. Manage appointments, doctor schedules, and departmental activities through an intuitive admin dashboard and user-friendly interface.",
      features: [
        "Appointment scheduling system",
        "Doctor availability management",
        "Patient records database",
        "Department activity tracking",
        "Admin dashboard with analytics",
      ],
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
      githubLink: "https://github.com/sahiliqubal06/Hospital_Management_System",
      image: p3,
    },
    {
      title: "ogStore",
      description:
        "An online sneaker store with Razorpay checkout and product search powered by Algolia.",
      features: [
        "Algolia-powered product search",
        "Razorpay payment integration",
        "Product filtering and sorting",
        "User accounts and order history",
        "Responsive shopping cart",
      ],
      techStack: [
        "React",
        "Node",
        "React Multi Carousel",
        "Express",
        "MongoDB",
        "Razorpay",
        "Algolia",
      ],
      liveLink: "",
      githubLink: "https://github.com/username/ogstore",
      image: p1,
    },
  ];

  useEffect(() => {
    const enhancedProjects = projectData.map((project) => ({
      ...project,
      showActions: false,
    }));

    const shuffledProjects = [...enhancedProjects].sort(
      () => Math.random() - 0.5
    );
    setProjects(shuffledProjects);
  }, []);

  const toggleActions = (index) => {
    setProjects(
      projects.map((project, i) => ({
        ...project,
        showActions: i === index ? !project.showActions : false,
      }))
    );
  };

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  const navigateToLink = (url, e) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8  min-h-screen">
      <div className="mb-10 md:mb-16 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
          Projects
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          A glimpse into some of my recent creations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative cursor-pointer"
            onClick={() => toggleActions(index)}
          >
            <div className="card bg-gray-800 border border-gray-700 rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30">
              <div className="relative h-48 w-full bg-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                {project.showActions && (
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-6 z-10 animate-fadeIn">
                    <button
                      className="absolute top-2 right-2 bg-gray-800/80 p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleActions(index);
                      }}
                    >
                      <X size={18} />
                    </button>
                    <button
                      onClick={(e) => navigateToLink(project.liveLink, e)}
                      className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full hover:shadow-lg hover:shadow-teal-500/50 transition-all transform hover:-translate-y-1"
                      title="View Live Project"
                    >
                      <ExternalLink size={22} className="text-white" />
                    </button>
                    <button
                      onClick={(e) => navigateToLink(project.githubLink, e)}
                      className="p-3 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full hover:shadow-lg hover:shadow-gray-600/50 transition-all transform hover:-translate-y-1"
                      title="View GitHub Repository"
                    >
                      <Github size={22} className="text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                      className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1"
                      title="Show Details"
                    >
                      <Maximize2 size={22} className="text-white" />
                    </button>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-700 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-700 text-gray-300 border border-gray-600">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-2">
                  {project.description}
                </p>
                <div className="mt-4 text-xs text-gray-500 flex items-center">
                  <span className="w-1 h-1 rounded-full bg-gray-500 mr-1"></span>
                  Click for options
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative bg-gray-900">
                <div className="h-64 md:h-full">
                  <img
                    src={modalProject.image}
                    alt={modalProject.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full flex gap-4">
                  <a
                    href={modalProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg flex-1 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={modalProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex-1 transition-colors"
                  >
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 mb-4">
                  {modalProject.title}
                </h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {modalProject.description}
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {modalProject.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-300"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {modalProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-gray-700 text-cyan-300 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 bg-gray-900/80 p-2 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-colors"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
