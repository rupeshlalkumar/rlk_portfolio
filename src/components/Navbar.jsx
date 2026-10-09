import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Profile from "../assets/Profile.jpg";
import profile from "../data/profile";

const navigation = [
  { label: "Home", path: "/", color: "#FB8D2E" },
  { label: "About", path: "/about", color: "#3AA540" },
  { label: "Businesses", path: "/businesses", color: "#FCCA0A" },
  { label: "Projects", path: "/projects", color: "#04ABED" },
  { label: "Journey", path: "/journey", color: "#FB8D2E" },
  { label: "Content", path: "/content", color: "#3AA540" },
  { label: "Contact", path: "/contact", color: "#04ABED" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Rupesh Lal Kumar, Home"
        >
          <img
            src={Profile}
            alt="Rupesh Lal Kumar"
            className="h-11 w-11 rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
            style={{ border: "3px solid #04ABED" }}
          />

          <div className="hidden sm:block">
            <span className="block text-base font-extrabold tracking-tight text-gray-900 lg:text-lg">
              {profile.name}
            </span>

            <span className="block text-xs font-medium text-gray-600">
              {profile.role}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-6"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `group relative whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-gray-950"
                    : "text-gray-600 hover:text-gray-950"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ backgroundColor: item.color }}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{ backgroundColor: "#04ABED" }}
          >
            Let's Talk
          </NavLink>
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 lg:hidden"
          style={{
            backgroundColor: menuOpen ? "#FB8D2E" : "#04ABED",
          }}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile / Tablet Navigation */}
      <div
        id="primary-navigation"
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[80vh] overflow-y-auto opacity-100"
            : "max-h-0 opacity-0"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <nav className="space-y-2 px-4 py-5 sm:px-6">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-50"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-950"
                }`
              }
              style={({ isActive }) => ({
                borderLeft: `3px solid ${item.color}`,
                color: isActive ? item.color : undefined,
              })}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <NavLink
            to="/contact"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-3 block rounded-lg px-4 py-3 text-center text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#04ABED" }}
          >
            Let's Talk
          </NavLink>
        </nav>
      </div>
    </header>
  );
}