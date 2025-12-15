// import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";

// function Header() {
//   return (
//     <div className="text-center">
//       <nav>
//         <Link to="/">Home</Link> | {""}
//         <Link to="/about">About</Link> | {""}
//         <Link to="/projects">Projects</Link> | {""}
//         <Link to="/resume">Resume</Link> | {""}
//         <Link to="/contact">Contact</Link>
//       </nav>


//       <Outlet />
//     </div>
//   );
// }

// export default Header;



import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
    
      <nav className="bg-gray-800 py-4 shadow-md">
        <ul className="flex justify-center space-x-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition duration-200 "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-400 transition duration-200"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className="hover:text-blue-400 transition duration-200"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/resume"
              className="hover:text-blue-400 transition duration-200"
            >
              Resume
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Header;

