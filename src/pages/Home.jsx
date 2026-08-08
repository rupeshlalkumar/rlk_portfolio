import React, { useState, useEffect } from "react";

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const DownloadIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const DribbbleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.39c-.312-.007-2.618-.067-5.226.398a28.27 28.27 0 01-1.238-2.69 17.51 17.51 0 004.534-3.098zm-6.195-2.55c1.868 0 3.56.702 4.843 1.86a15.717 15.717 0 01-4.22 2.894 37.126 37.126 0 01-2.92-5.06 8.455 8.455 0 012.297-.694zM7.05 5.592c.795 1.47 1.84 3.25 3.03 5.166-2.973.854-5.91 1.258-6.04 1.276a8.544 8.544 0 013.01-6.442zm-3.045 8.4c.164-.02 2.812-.39 5.632-1.18.458 1.07.95 2.15 1.472 3.21-3.693 1.066-6.685.955-6.812.948a8.528 8.528 0 01-.292-2.978zm4.35 6.058c.15-.005 2.766-.1 6.06-1.11.758 1.95 1.378 3.73 1.808 5.14A8.51 8.51 0 018.355 20.05zm9.522.06c-.47-1.47-1.12-3.32-1.92-5.35 2.45-.48 4.64-.46 4.93-.44a8.518 8.518 0 01-3.01 5.79z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SparklesIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const CloseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ROLES = ["FULL STACK DEVELOPER", "UI/UX DESIGNER", "REACT & NODE SPECIALIST", "MERN STACK EXPERT"];

const HeroAvatarGraphic = () => (
  <div className="relative w-full max-w-[460px] aspect-square mx-auto flex items-center justify-center">
    {/* Outer Glowing Rings */}
    <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_35s_linear_infinite]"></div>
    <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/30 animate-[spin_25s_linear_infinite_reverse]"></div>
    <div className="absolute inset-12 rounded-full border border-indigo-500/20"></div>

    {/* Backdrop Gradient Radial Glow */}
    <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-400/30 blur-3xl -z-10 animate-pulse"></div>

    {/* Hero Avatar Illustration Card */}
    <div className="relative z-10 w-72 h-80 sm:w-80 sm:h-96 rounded-3xl bg-gradient-to-b from-slate-800/90 via-slate-900/95 to-slate-950 p-3 shadow-2xl border border-slate-700/60 backdrop-blur-md overflow-hidden group">
      {/* Top Banner Gradient */}
      <div className="h-32 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="text-white/20 font-black text-6xl tracking-widest select-none">RLK</div>
      </div>

      {/* Profile Image / Vector Avatar */}
      <div className="relative -mt-14 flex justify-center">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-900 p-1.5 shadow-xl ring-4 ring-blue-500/40 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-4xl shadow-inner overflow-hidden">
            {/* Styled Stylized Developer Avatar */}
            <svg className="w-full h-full text-slate-100" viewBox="0 0 128 128" fill="none">
              <circle cx="64" cy="64" r="64" fill="url(#avatar-grad)" />
              <path d="M64 42C51.85 42 42 51.85 42 64C42 76.15 51.85 86 64 86C76.15 86 86 76.15 86 64C86 51.85 76.15 42 64 42Z" fill="#38BDF8" opacity="0.15" />
              <path d="M64 36C51.3 36 41 46.3 41 59C41 71.7 51.3 82 64 82C76.7 82 87 71.7 87 59C87 46.3 76.7 36 64 36ZM64 74C55.7 74 49 67.3 49 59C49 50.7 55.7 44 64 44C72.3 44 79 50.7 79 59C79 67.3 72.3 74 64 74Z" fill="#F8FAFC" />
              <path d="M64 88C43.5 88 26 100.5 22 118C33.2 124.4 48.2 128 64 128C79.8 128 94.8 124.4 106 118C102 100.5 84.5 88 64 88Z" fill="#38BDF8" />
              <defs>
                <linearGradient id="avatar-grad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1E1B4B" />
                  <stop offset="1" stopColor="#0F172A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" title="Online & Available"></span>
        </div>
      </div>

      {/* Info Card Body */}
      <div className="text-center mt-3 px-2">
        <h3 className="text-xl font-bold text-white tracking-wide">Rupesh Lal</h3>
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mt-0.5">Full Stack Engineer</p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4">
          <span className="px-2.5 py-1 text-[11px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full">React</span>
          <span className="px-2.5 py-1 text-[11px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full">Node.js</span>
          <span className="px-2.5 py-1 text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full">Tailwind</span>
          <span className="px-2.5 py-1 text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-full">TypeScript</span>
        </div>
      </div>
    </div>

    {/* Floating Badge 1 - Experience */}
    <div className="absolute top-6 -left-4 sm:left-0 z-20 bg-slate-900/90 border border-slate-700/80 p-3 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3 animate-[bounce_4s_infinite]">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/30">
        5+
      </div>
      <div className="text-left pr-2">
        <p className="text-xs text-slate-400 font-medium">Years of</p>
        <p className="text-xs font-bold text-white">Experience</p>
      </div>
    </div>

    {/* Floating Badge 2 - Satisfaction */}
    <div className="absolute bottom-8 -right-4 sm:right-0 z-20 bg-slate-900/90 border border-slate-700/80 p-3 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3 animate-[bounce_5s_infinite]">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
        <CheckCircleIcon className="w-6 h-6" />
      </div>
      <div className="text-left pr-2">
        <p className="text-xs text-slate-400 font-medium">Projects Done</p>
        <p className="text-xs font-bold text-emerald-400">50+ Completed</p>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Dynamic Typewriter Roles Effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    // Word complete: pause before erasing
    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(timeout);
    }

    // Erasing complete: switch role asynchronously via timeout callback to prevent synchronous set-state in effect
    if (isDeleting && displayText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    // Step typing/deleting timer
    const typingSpeed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setModalOpen(false);
    }, 2500);
  };

  return (
    <section className="relative min-h-screen bg-[#071b2f] text-white flex items-center overflow-hidden py-12 lg:py-0">
      {/* Background Subtle Ambient Grids & Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Section */}
          <div className="flex flex-col items-start text-left">
            
            {/* Developer Tag */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900/60 to-slate-800/80 border border-blue-500/30 px-4 py-2 rounded-full shadow-lg shadow-blue-500/10 backdrop-blur-md mb-6">
              <SparklesIcon className="w-4 h-4 text-cyan-400 animate-spin" />
              <span className="tracking-[3px] text-xs font-extrabold text-blue-300 uppercase">
                RLK DEVELOPER
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white">
              HAY! I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">Rupesh</span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 mt-4 min-h-[3.5rem] flex items-center">
              <span>{displayText}</span>
              <span className="text-cyan-400 ml-1 animate-pulse">|</span>
            </h2>

            {/* Bio Paragraph */}
            <p className="text-slate-300 mt-6 max-w-xl text-base sm:text-lg leading-relaxed font-normal">
              Passionate Frontend Developer and UX/UI Designer specializing in <strong className="text-white">React</strong>, <strong className="text-white">JavaScript</strong>, <strong className="text-white">Node.js</strong>, and modern web technologies. I build responsive, scalable, and user-friendly web applications with clean code.
            </p>

            {/* Call to Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-5 mt-9">
              {/* Primary CTA */}
              <button
                onClick={() => setModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>GET IN TOUCH</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#download-cv"
                onClick={(e) => { e.preventDefault(); alert("CV Download simulated successfully!"); }}
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-base px-6 py-4 rounded-full transition-all duration-300 hover:text-white"
              >
                <DownloadIcon className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400">Follow Me:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-600/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Dribbble Portfolio"
                >
                  <DribbbleIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 hover:shadow-lg hover:shadow-slate-500/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label="GitHub Repositories"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Section */}
          <div className="relative flex justify-center items-center mt-6 lg:mt-0">
            <HeroAvatarGraphic />
          </div>

        </div>

        {/* Bottom Quick Feature Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-800">
            <h4 className="text-3xl font-extrabold text-blue-400">5+</h4>
            <p className="text-xs text-slate-400 font-medium uppercase mt-1 tracking-wider">Years Experience</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-800">
            <h4 className="text-3xl font-extrabold text-cyan-400">50+</h4>
            <p className="text-xs text-slate-400 font-medium uppercase mt-1 tracking-wider">Projects Completed</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-800">
            <h4 className="text-3xl font-extrabold text-indigo-400">20+</h4>
            <p className="text-xs text-slate-400 font-medium uppercase mt-1 tracking-wider">Satisfied Clients</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-800">
            <h4 className="text-3xl font-extrabold text-emerald-400">100%</h4>
            <p className="text-xs text-slate-400 font-medium uppercase mt-1 tracking-wider">Code Quality</p>
          </div>
        </div>
      </div>

      {}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <CloseIcon />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
            <p className="text-sm text-slate-400 mb-6">Send a quick inquiry to start your project collaboration.</p>

            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center">
                <CheckCircleIcon className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                <p className="text-xs text-emerald-300 mt-1">Thank you! Rupesh will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Describe your project..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;