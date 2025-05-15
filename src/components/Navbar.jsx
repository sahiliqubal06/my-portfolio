import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll without changing URL hash
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/30 shadow-lg border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-[90%] sm:max-w-[95%] lg:max-w-[90%] mx-auto">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative group">
            <img
              src="/src/assets/img1.jpg"
              alt="Sahil Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-blue-500 group-hover:ring-4 transition-all duration-300"
            />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Sahil Iqubal
            </h1>
            <p className="text-xs sm:text-sm font-medium inline-block mt-1 px-3 py-1 rounded-full bg-yellow-400 text-gray-800 shadow-md">
              Full Stack Developer
            </p>
          </div>
        </div>

        <a
          href="#contact"
          onClick={handleContactClick}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xs sm:text-sm md:text-base shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Let’s Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;
