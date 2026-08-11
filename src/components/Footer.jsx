import Icons from "../assets/Icons.png";
import { Link } from "react-router-dom";

const BRAND_COLORS = {
  orange: "#fb8d2e",
  green: "#3aa540",
  yellow: "#fcca0a",
  azure: "#04abed",
};

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  "Website Development",
  "Frontend Development",
  "Software Development",
  "Digital Solutions",
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rupeshlalkumar",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rupeshlalkumarrlk/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rupeshlalkumar/",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@rupeshlal_kumar",
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/rupeshlalkumar/",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-800 bg-gray-950 text-white"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ========================================
            MAIN FOOTER
        ========================================= */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* ======================================
              BRAND
          ======================================= */}
          <div className="max-w-sm">
            <Link
              to="/"
              aria-label="Rupesh Lal Kumar - Home"
              className="group inline-flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-950"
              style={{
                "--tw-ring-color": BRAND_COLORS.azure,
              }}
            >
              {/* Logo */}
              {/* <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-black text-white shadow-lg transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                style={{
                  backgroundColor: BRAND_COLORS.orange,
                }}
              >
                RLK
              </span> */}
              <img
                src={Icons}
                alt="Logo"
                className="h-11 w-11 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
              />

              {/* Brand Name */}
              <span>
                <span
                  className="block text-lg font-extrabold tracking-tight"
                  style={{
                    color: BRAND_COLORS.green,
                  }}
                >
                  Rupesh Lal Kumar
                </span>

                <span className="mt-0.5 block text-xs font-medium text-gray-400">
                  Software Entrepreneur
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              I build modern websites and software solutions that help
              businesses establish a strong digital presence and grow.
            </p>

            {/* Brand Colors */}
            <div
              aria-hidden="true"
              className="mt-7 flex h-1.5 w-32 overflow-hidden rounded-full"
            >
              <span
                className="w-1/4"
                style={{
                  backgroundColor: BRAND_COLORS.orange,
                }}
              />

              <span
                className="w-1/4"
                style={{
                  backgroundColor: BRAND_COLORS.green,
                }}
              />

              <span
                className="w-1/4"
                style={{
                  backgroundColor: BRAND_COLORS.yellow,
                }}
              />

              <span
                className="w-1/4"
                style={{
                  backgroundColor: BRAND_COLORS.azure,
                }}
              />
            </div>
          </div>

          {/* ======================================
              QUICK LINKS
          ======================================= */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h2>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="inline-flex rounded-md text-sm text-gray-400 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 motion-reduce:transition-none"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ======================================
              SERVICES
          ======================================= */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h2>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="inline-flex rounded-md text-sm text-gray-400 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 motion-reduce:transition-none"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ======================================
              CONNECT
          ======================================= */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Connect
            </h2>

            <ul className="mt-5 space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} - opens in a new tab`}
                    className="inline-flex rounded-md text-sm text-gray-400 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 motion-reduce:transition-none"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fcca0a] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 motion-reduce:transition-none"
              style={{
                backgroundColor: BRAND_COLORS.azure,
              }}
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* ========================================
            DIVIDER
        ========================================= */}
        <div aria-hidden="true" className="h-px w-full bg-gray-800" />

        {/* ========================================
            BOTTOM FOOTER
        ========================================= */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear}{" "}
            <span className="font-semibold text-gray-400">
              Rupesh Lal Kumar
            </span>
            . All rights reserved.
          </p>

          {/* Legal Links */}
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="rounded-md text-sm text-gray-500 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 motion-reduce:transition-none"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="rounded-md text-sm text-gray-500 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 motion-reduce:transition-none"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
