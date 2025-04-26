import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 text-white text-center">
      <p>&copy; 2025 Sahil Iqubal. All Rights Reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a 
          href="https://www.linkedin.com/in/sahil-iqubal-2492871b5/" 
          className="hover:scale-110 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} className="text-blue-500 hover:text-blue-400" />
        </a>
        <a 
          href="https://github.com/sahiliqubal06" 
          className="hover:scale-110 transition-all duration-300"
          aria-label="GitHub"
        >
          <FaGithub size={24} className="text-white hover:text-gray-300" />
        </a>
        <a 
          href="https://x.com/itsiqubal" 
          className="hover:scale-110 transition-all duration-300"
          aria-label="Twitter"
        >
          <FaTwitter size={24} className="text-cyan-400 hover:text-cyan-300" />
        </a>
      </div>
    </footer>
  );
}