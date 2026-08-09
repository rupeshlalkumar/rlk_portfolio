import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", color: "#fb8d2e" },
    { name: "About", path: "/about", color: "#3aa540" },
    { name: "Projects", path: "/projects", color: "#04abed" },
    { name: "Services", path: "/services", color: "#fcca0a" },
    { name: "Contact", path: "/contact", color: "#fb8d2e" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2"
          aria-label="RLK Home"
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl text-xl font-black text-white shadow-md transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: "#fb8d2e" }}
          >
            RLK
          </div>

          <div className="hidden sm:block">
            <span
              className="text-xl font-extrabold tracking-tight"
              style={{ color: "#3aa540" }}
            >
              Rupesh Lal Kumar
            </span>

            <p className="text-xs font-medium text-gray-600">
              Software Entrepreneur
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="group relative py-2 text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-black"
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ backgroundColor: link.color }}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* CTA */}
          <NavLink
            to="/contact"
            className="rounded-lg px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: "#04abed" }}
          >
            Let's Talk
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          style={{
            backgroundColor: isOpen ? "#fb8d2e" : "#04abed",
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2 px-6 py-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:text-black"
              style={({ isActive }) => ({
                borderLeft: `3px solid ${link.color}`,
                backgroundColor: isActive ? `${link.color}10` : "transparent",
                color: isActive ? link.color : undefined,
              })}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 block rounded-lg px-4 py-3 text-center text-sm font-bold text-white"
            style={{ backgroundColor: "#04abed" }}
          >
            Let's Talk
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;