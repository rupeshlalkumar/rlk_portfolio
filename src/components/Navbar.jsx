import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const HomeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UserIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ResumeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const PortfolioIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MailIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CopyIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: HomeIcon },
  { path: "/about", label: "About", icon: UserIcon },
  { path: "/resume", label: "Resume", icon: ResumeIcon },
  { path: "/portfolio", label: "Portfolio", icon: PortfolioIcon },
  { path: "/contact", label: "Contact", icon: MailIcon },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "rupeshlal@itmodem.com";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/20 py-3"
          : "bg-slate-900 border-b border-slate-800/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {}
          <NavLink
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl p-1 transition"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                RL
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full" title="Available for work"></span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                Rupesh Lal
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-wide flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Software Engineer
              </span>
            </div>
          </NavLink>

          {}
          <nav className="hidden md:flex items-center gap-1 bg-slate-800/50 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-600/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110 text-white" : "text-slate-400 group-hover:text-white"}`} />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {}
          <div className="hidden lg:flex items-center gap-3">
            {/* Email Widget */}
            <div className="flex items-center bg-slate-800/80 border border-slate-700/80 rounded-full p-1 pl-3 pr-1.5 shadow-sm hover:border-slate-600 transition-colors">
              <a
                href={`mailto:${email}`}
                className="text-xs font-medium text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2 mr-2"
                title="Send Email"
              >
                <MailIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>{email}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-full bg-slate-700/70 hover:bg-blue-600 text-slate-300 hover:text-white transition-all duration-200 focus:outline-none relative"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copied ? (
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <CopyIcon className="w-3.5 h-3.5" />
                )}

                {/* Tooltip Notification */}
                {copied && (
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap animate-bounce">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            {/* Quick CTA */}
            <a
              href={`mailto:${email}?subject=Project%20Inquiry`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Hire Me</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-all focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                    }`
                  }
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            {/* Mobile Contact Bar */}
            <div className="flex items-center justify-between bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400 truncate"
              >
                <MailIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">{email}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 shrink-0"
                title="Copy Email"
              >
                {copied ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`mailto:${email}?subject=Project%20Inquiry`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl shadow-md text-center"
            >
              <span>Get In Touch</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;