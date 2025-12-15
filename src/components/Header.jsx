



import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (path, id) => {
    navigate(path);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on click
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 py-4 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center ">
        <div className="text-white font-bold text-2xl ">My Portfolio</div>

   
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        
        <ul className="hidden md:flex justify-center gap-10 text-white font-bold">
          <li onClick={() => handleClick("/", "home")} className="hover:text-blue-500 cursor-pointer">Home</li>
          <li onClick={() => handleClick("/about", "about")} className="hover:text-blue-500 cursor-pointer">About</li>
          <li onClick={() => handleClick("/projects", "projects")} className="hover:text-blue-500 cursor-pointer">Projects</li>
          <li onClick={() => handleClick("/resume", "resume")} className="hover:text-blue-500 cursor-pointer">Resume</li>
          <li onClick={() => handleClick("/contact", "contact")} className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </div>

      
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-center text-white font-bold bg-gray-700 py-4">
          <li onClick={() => handleClick("/", "home")} className="hover:text-blue-500 cursor-pointer">Home</li>
          <li onClick={() => handleClick("/about", "about")} className="hover:text-blue-500 cursor-pointer">About</li>
          <li onClick={() => handleClick("/projects", "projects")} className="hover:text-blue-500 cursor-pointer">Projects</li>
          <li onClick={() => handleClick("/resume", "resume")} className="hover:text-blue-500 cursor-pointer">Resume</li>
          <li onClick={() => handleClick("/contact", "contact")} className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Header;



