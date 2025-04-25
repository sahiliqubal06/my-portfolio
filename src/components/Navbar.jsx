// File: src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <nav className="hidden md:flex space-x-6">
        {["Home", "About", "Projects", "Skills", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              {item}
            </a>
          )
        )}
      </nav>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-700 dark:text-white hover:scale-110 transition"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Sun className="text-yellow-400" />
          ) : (
            <Moon className="text-blue-600" />
          )}
        </button>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 md:hidden absolute top-16 left-0 right-0 shadow-lg">
          {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-2 hover:text-blue-600 dark:hover:text-yellow-400 transition"
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
