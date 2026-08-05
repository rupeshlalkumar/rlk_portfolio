import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-lg font-medium">
          <NavLink
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="hover:text-yellow-300 transition duration-300"
          >
            About
          </NavLink>

          <NavLink
            to="/resume"
            className="hover:text-yellow-300 transition duration-300"
          >
            Resume
          </NavLink>

          <NavLink
            to="/portfolio"
            className="hover:text-yellow-300 transition duration-300"
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact
          </NavLink>
        </div>

        {/* Phone Number */}
        <div className="text-lg font-semibold">
          <a
            href="email: rupeshlalkumar@hotmail.com "
            className="hover:text-yellow-300 transition duration-300"
          >
           rupeshlalkumar@hotmail.com
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;