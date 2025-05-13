import { useState, useEffect } from "react";
import { X, ExternalLink, Github, Maximize2 } from "lucide-react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import p13 from "../assets/p13.png";
import p14 from "../assets/p14.png";
import p15 from "../assets/p15.png";
import p16 from "../assets/p16.png";
import p17 from "../assets/p17.png";
// import p18 from "../assets/p18.png";
// import p19 from "../assets/p19.png";
// import p20 from "../assets/p20.png";

export default function Projects() {
  const [fullStackProjects, setFullStackProjects] = useState([]);
  const [frontendProjects, setFrontendProjects] = useState([]);
  const [modalProject, setModalProject] = useState(null);
  const [activeTab, setActiveTab] = useState("fullstack");

  const projectData = [
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
      title: "GupShup: Real-Time Chat Application",
      description:
        "GupShup is a real-time chat application enabling seamless communication with socket-powered interactions, authentication, and responsive design. It offers individual and group messaging with a modern UI experience.",
      features: [
        "Real-time messaging with Socket.IO",
        "User authentication and protected routes",
        "One-on-one and group chat support",
        "Online user status indicators",
        "Responsive and modern chat UI",
      ],
      techStack: [
        "React",
        "Zustand",
        "TailwindCSS",
        "DaisyUI",
        "Express",
        "Mongoose",
        "JWT",
        "Bcryptjs",
        "Socket.IO",
        "Cloudinary",
      ],
      liveLink: "",
      githubLink: "https://github.com/sahiliqubal06/CHAT-APP",
      image: p5,
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

    {
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. The game offers a responsive layout, interactive gameplay, and logic to determine winners or draw, providing a smooth user experience.",
      features: [
        "Interactive 3x3 game board",
        "Two-player gameplay (X and O)",
        "Winner and draw detection logic",
        "Game reset functionality",
        "Responsive and clean UI",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript (Vanilla)"],
      liveLink: "https://your-tic-tac-toe-url.com",
      githubLink: "https://github.com/sahiliqubal06/Tic-Tac-Toe-Game",
      image: p6,
    },
    {
      title: "Cricket Score Tracker",
      description:
        "A simple and interactive cricket score tracking app built with HTML, CSS, and JavaScript. It allows users to increment scores, reset the game, and keep track of team totals in a clean and responsive layout.",
      features: [
        "Live score tracking for two teams",
        "Add runs and reset score buttons",
        "Responsive and intuitive UI",
        "Scoreboard updates in real-time",
        "Built using only frontend technologies",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript (Vanilla)"],
      liveLink: "https://your-score-tracker-url.com",
      githubLink: "https://github.com/sahiliqubal06/Cricket_Score_Tracker",
      image: p7,
    },
    {
      title: "Expense Tracker",
      description:
        "A simple and functional Expense Tracker built using HTML, CSS, and JavaScript. It allows users to add income and expenses, track their balance in real-time, and view a history of all transactions with clean visuals.",
      features: [
        "Add and delete income/expense transactions",
        "Real-time balance calculation",
        "Transaction history display",
        "Persistent state using local storage",
        "Minimal and responsive design",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript (Vanilla)"],
      liveLink: "https://your-expense-tracker-url.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/ExpenseTracker",
      image: p14,
    },
    {
      title: "Quiz App",
      description:
        "A dynamic and interactive Quiz App developed with HTML, CSS, and JavaScript. It presents users with multiple-choice questions, evaluates answers instantly, and displays the final score at the end of the quiz.",
      features: [
        "Multiple-choice question system",
        "Instant answer validation",
        "Score tracking and final result display",
        "Next question navigation",
        "Responsive and user-friendly UI",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript (Vanilla)"],
      liveLink: "https://your-quiz-app-url.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/QuizApp",
      image: p15,
    },
    {
      title: "Shopping Cart",
      description:
        "A functional shopping cart interface developed using HTML, CSS, and JavaScript. It enables users to browse products, add or remove items from the cart, and see total price calculations in real time.",
      features: [
        "Add and remove items from cart",
        "Real-time price and quantity updates",
        "Dynamic cart total calculation",
        "Responsive product layout",
        "Clean and interactive UI",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript (Vanilla)"],
      liveLink: "https://your-shopping-cart-url.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/ShoppingCart",
      image: p11,
    },
    {
      title: "To-Do List",
      description:
        "A simple and efficient To-Do List app developed with HTML, CSS, and JavaScript. It helps users manage tasks by adding, marking as complete, and deleting them with a clean and responsive interface.",
      features: [
        "Add and delete tasks",
        "Mark tasks as completed",
        "Responsive and clean user interface",
        "Task state persistence using local storage",
        "Simple and intuitive task management",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript (Vanilla)"],
      liveLink: "https://your-todo-list-url.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/TODOLIST",
      image: p8,
    },
    {
      title: "Weather App",
      description:
        "A weather application built with HTML, CSS, and JavaScript that allows users to get real-time weather data for any city. It displays the city's current temperature, weather conditions, and provides an error message if the city is not found.",
      features: [
        "Real-time weather data fetching using OpenWeather API",
        "City search functionality",
        "Displays temperature and weather description",
        "Responsive and user-friendly interface",
        "Error handling for invalid city input",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript (Vanilla)"],
      liveLink: "https://your-weather-app-url.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/WeatherApp",
      image: p13,
    },
    {
      title: "Background Changer",
      description:
        "A dynamic Background Changer built with React and TailwindCSS, allowing users to switch between different backgrounds with ease. The app uses a simple interface with buttons for changing backgrounds and provides a smooth user experience.",
      features: [
        "Background switcher functionality",
        "Simple and clean UI with TailwindCSS styling",
        "Dynamic background change on button click",
        "Responsive design for different screen sizes",
        "Built with React and Vite for fast development",
      ],
      techStack: ["React", "TailwindCSS", "Vite"],
      liveLink: "https://your-background-changer-url.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/React/BackgroundChanger",
      image: p9,
    },
    {
      title: "Currency Converter",
      description:
        "A Currency Converter app developed with React and TailwindCSS, allowing users to easily convert between different currencies. The app fetches real-time exchange rates and provides an intuitive UI for seamless conversions.",
      features: [
        "Real-time currency conversion",
        "Supports multiple currencies",
        "Clean and responsive UI with TailwindCSS",
        "Built with React and Vite for fast development",
        "Live exchange rate data fetched from an API",
      ],
      techStack: ["React", "TailwindCSS", "Vite"],
      liveLink: "https://your-currency-converter-url.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/React/CurrencyConverter",
      image: p12,
    },
    {
      title: "Dashboard Page",
      description:
        "A responsive and functional Dashboard Page built with React and TailwindCSS. It features a navbar, header, footer, and multiple sections like Home and About. The app uses React Router for navigation, ensuring smooth transitions between pages.",
      features: [
        "Responsive navbar with links to Home and About",
        "Dynamic header section with customizable content",
        "Footer section with useful links and information",
        "React Router for seamless page navigation",
        "TailwindCSS for a clean and modern design",
        "Mobile-friendly layout",
      ],
      techStack: ["React", "React Router", "TailwindCSS", "Vite"],
      liveLink: "https://your-dashboard-url.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/React/Dashboard",
      image: p16,
    },
    {
      title: "Random Password Generator",
      description:
        "A powerful password generator app built using React, which allows the user to customize the password by setting length, character type options (uppercase, lowercase, numbers, and special characters), and generates a random password accordingly. The generated password can be copied to the clipboard with a click.",
      features: [
        "Password length customization (6-20 characters)",
        "Option to include uppercase, lowercase, numbers, and special characters",
        "Real-time password generation on settings change",
        "Copy generated password to clipboard with one click",
        "Responsive and sleek UI using TailwindCSS",
      ],
      techStack: ["React", "TailwindCSS", "Vite", "JavaScript"],
      liveLink: "https://your-random-password-generator-link.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/React/PasswordGenerator",
      image: p17,
    },
    {
      title: "Theme Switcher",
      description:
        "A theme switching application built with React that allows users to toggle between light and dark themes. The app uses context to manage the theme state and applies it globally to the app. It also includes reusable components like a button for switching themes and a card that changes based on the selected theme.",
      features: [
        "Toggle between light and dark themes",
        "Global theme state management using React Context",
        "Real-time theme update using useEffect",
        "Sleek UI designed with TailwindCSS",
      ],
      techStack: [
        "React",
        "TailwindCSS",
        "Vite",
        "JavaScript",
        "React Context API",
      ],
      liveLink: "https://your-theme-switcher-link.com",
      githubLink:
        "https://github.com/sahiliqubal06/JS-Projects/tree/main/React/ThemeSwitcher",
      image: p10,
    },
  ];

  useEffect(() => {
    const fullStack = projectData.filter((project) => {
      const stack = project.techStack.join(" ").toLowerCase();
      return (
        stack.includes("express") ||
        stack.includes("mongodb") ||
        stack.includes("node")
      );
    });

    const frontend = projectData.filter((project) => {
      const stack = project.techStack.join(" ").toLowerCase();
      return (
        !stack.includes("express") &&
        !stack.includes("mongodb") &&
        !stack.includes("node")
      );
    });

    setFullStackProjects(fullStack);
    setFrontendProjects(frontend);
  }, []);

  const toggleActions = (projects, index) => {
    if (activeTab === "fullstack") {
      setFullStackProjects(
        fullStackProjects.map((project, i) => ({
          ...project,
          showActions: i === index ? !project.showActions : false,
        }))
      );
    } else {
      setFrontendProjects(
        frontendProjects.map((project, i) => ({
          ...project,
          showActions: i === index ? !project.showActions : false,
        }))
      );
    }
  };

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  const navigateToLink = (url, e) => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8 min-h-screen ">
      <div className="mb-10 md:mb-16 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-8">
          Projects
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          A curated collection of recent projects that reflect my passion for
          design, development, and problem-solving through technology.
        </p>

        <div className="flex justify-center mt-8 mb-12">
          <div className="bg-gray-800 p-1 rounded-xl flex">
            <button
              onClick={() => setActiveTab("fullstack")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "fullstack"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "frontend"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Frontend
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {(activeTab === "fullstack" ? fullStackProjects : frontendProjects).map(
          (project, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() =>
                toggleActions(
                  activeTab === "fullstack"
                    ? fullStackProjects
                    : frontendProjects,
                  index
                )
              }
            >
              <div className="card bg-gray-800 border border-gray-700 rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/30">
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
                          toggleActions(
                            activeTab === "fullstack"
                              ? fullStackProjects
                              : frontendProjects,
                            index
                          );
                        }}
                      >
                        <X size={18} />
                      </button>
                      {project.liveLink && (
                        <button
                          onClick={(e) => navigateToLink(project.liveLink, e)}
                          className="p-3 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all transform hover:-translate-y-1"
                          title="View Live Project"
                        >
                          <ExternalLink size={22} className="text-white" />
                        </button>
                      )}
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
                        className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1"
                        title="Show Details"
                      >
                        <Maximize2 size={22} className="text-white" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-700 text-indigo-300 border border-indigo-500/20"
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
          )
        )}
      </div>

      {/* No projects placeholder */}
      {((activeTab === "fullstack" && fullStackProjects.length === 0) ||
        (activeTab === "frontend" && frontendProjects.length === 0)) && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">
            No projects available in this category
          </p>
        </div>
      )}

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
                  {modalProject.liveLink && (
                    <a
                      href={modalProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex-1 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
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
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 mb-4">
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
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2"></span>
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
                        className="px-3 py-1 text-sm rounded-full bg-gray-700 text-indigo-300 border border-purple-500/20"
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
