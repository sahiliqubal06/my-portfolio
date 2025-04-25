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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-8 w-full max-w-[90%] sm:max-w-[95%] lg:max-w-[90%] mx-auto">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src="/src/assets/img1.jpg"
            alt="Sahil Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Sahil Iqubal
            </h1>
            <p
              className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 px-3 py-1 inline-block rounded-full"
              style={{
                backgroundColor: "#ffcc00",
                color: "#333",
              }}
            >
              Full Stack Developer
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white hover:text-[#333] rounded-full font-bold hover:bg-blue-700 transition text-xs sm:text-sm md:text-base"
        >
          Let’s Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;
