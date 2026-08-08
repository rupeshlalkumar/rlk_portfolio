import React, { useState } from "react";

const DownloadIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const PrintIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H7a2 2 0 00-2 2v4h10z" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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

const ExternalLinkIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const AcademicCapIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const BadgeCheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SparklesIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const CodeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const CopyIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const RESUME_DATA = {
  header: {
    name: "Rupesh Lal",
    title: "Senior Full Stack & Frontend Engineer",
    location: "Jharkhand, India",
    email: "rupeshlal@itmodem.com",
    phone: "+91 98765 43210",
    website: "https://itmodem.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    summary:
      "Results-oriented Senior Full Stack Engineer with over 5+ years of experience architecting high-performance web applications, scalable REST/GraphQL microservices, and modern UI/UX design systems. Expert in React, Next.js, Node.js, and TypeScript with a track record of driving Core Web Vitals optimizations and delivering enterprise software solutions.",
  },
  highlights: [
    { label: "Total Experience", value: "5+ Years" },
    { label: "Projects Shipped", value: "50+ Global Apps" },
    { label: "Performance Gain", value: "+40% Average" },
    { label: "Team Leadership", value: "Engineered & Mentored" },
  ],
  skills: [
    {
      category: "Frontend Architecture",
      items: [
        { name: "React.js & Next.js", level: 95 },
        { name: "TypeScript / ES6+", level: 92 },
        { name: "Tailwind CSS & Styled-Components", level: 95 },
        { name: "Redux Toolkit & Zustand", level: 88 },
        { name: "Micro-Frontends & Design Systems", level: 85 },
      ],
    },
    {
      category: "Backend & Cloud",
      items: [
        { name: "Node.js & Express.js", level: 90 },
        { name: "RESTful & GraphQL APIs", level: 92 },
        { name: "MongoDB / Mongoose", level: 88 },
        { name: "PostgreSQL & SQL", level: 82 },
        { name: "Docker & AWS Deployment", level: 80 },
      ],
    },
    {
      category: "Engineering Practices & Tools",
      items: [
        { name: "Git, GitHub & CI/CD Pipelines", level: 92 },
        { name: "Web Vitals & Performance Optimization", level: 90 },
        { name: "Figma to Responsive Code Conversion", level: 95 },
        { name: "Jest / React Testing Library", level: 85 },
        { name: "Agile & Technical Code Reviews", level: 90 },
      ],
    },
  ],
  experience: [
    {
      role: "Senior Full Stack Engineer",
      company: "ITModem Solutions",
      period: "2023 - Present",
      location: "India (Remote)",
      achievements: [
        "Architected modular React/Next.js client portals serving over 100k active monthly users with sub-second page loading speeds.",
        "Engineered RESTful Node.js microservices with JWT authentication, leading to a 35% improvement in API query response times.",
        "Refactored legacy UI components into a centralized Tailwind-powered component library, reducing feature delivery cycles by 30%.",
        "Mentored junior developers in state management, code reviews, and automated UI testing protocols.",
      ],
      techStack: ["React.js", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "GraphQL"],
    },
    {
      role: "Frontend Developer & UI Specialist",
      company: "WebTech Studio",
      period: "2021 - 2023",
      location: "India",
      achievements: [
        "Led frontend development for fintech dashboards and real-time data visualization platforms using React and D3/Recharts.",
        "Improved Google Core Web Vitals score from 62 to 96 across 12 client enterprise websites.",
        "Partnered directly with UX designers to translate complex wireframes into fully accessible, responsive React interfaces.",
      ],
      techStack: ["React.js", "JavaScript (ES6)", "Redux Toolkit", "Sass", "REST APIs", "Figma"],
    },
    {
      role: "Junior Web Developer",
      company: "Digital Edge Inc.",
      period: "2019 - 2021",
      location: "India",
      achievements: [
        "Built dynamic client web portals and single page applications using modern JavaScript, CSS flexbox/grid, and Bootstrap.",
        "Integrated third-party APIs for payment gateways, mapping services, and social authentications.",
        "Maintained cross-browser consistency and responsive design fidelity across mobile and desktop breakpoints.",
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Git", "REST APIs"],
    },
  ],
  projects: [
    {
      title: "Enterprise MERN SaaS Dashboard",
      role: "Lead Developer",
      description:
        "Full-stack administrative platform featuring real-time telemetry analytics, role-based access control (RBAC), and dark/light UI modes.",
      impact: "Reduced user onboarding latency by 50% and simplified tenant provisioning.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    },
    {
      title: "Next.js High-Performance E-Commerce Engine",
      role: "Frontend Architect",
      description:
        "E-commerce storefront utilizing Server-Side Rendering (SSR), optimistic UI updates, Stripe checkout integration, and custom caching.",
      impact: "Achieved a 99 Lighthouse performance rating and boosted client checkout conversion rate by 22%.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "State Technological University",
      period: "2016 - 2020",
      grade: "First Class with Honors",
      details: "Specialized in Web Software Engineering, Algorithm Optimization, and Database Systems.",
    },
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", year: "2023" },
    { name: "Meta Front-End Developer Professional Certificate", year: "2022" },
    { name: "MongoDB Certified Developer Associate", year: "2021" },
  ],
  honors: [
    { title: "Best Innovator Award", issuer: "ITModem Solutions", detail: "Recognized for outstanding architectural overhaul of core UI platform." },
    { title: "Open Source Contributor", issuer: "GitHub Community", detail: "Active contributor to popular React utility libraries and documentation." },
  ],
};

const Resume = () => {
  const [viewMode, setViewMode] = useState("detailed"); // "detailed" | "compact"
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState("all"); // "all" | "experience" | "skills" | "projects"

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.header.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#071b2f] text-slate-100 py-10 px-4 sm:px-6 lg:px-12 font-sans antialiased relative selection:bg-blue-500 selection:text-white print:bg-white print:text-black print:p-0">
      
      {/* Background Decorative Ambient Gradients (Hidden on Print) */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none print:hidden"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none print:hidden"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none print:hidden"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-8">

        {}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 shadow-xl print:hidden">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
              <CodeIcon className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white">Curriculum Vitae</h1>
              <p className="text-xs text-slate-400">Interactive & Print-Ready Format</p>
            </div>
          </div>

          {/* Controls Group */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Switcher */}
            <div className="inline-flex bg-slate-800 p-1 rounded-xl border border-slate-700/60">
              <button
                onClick={() => setViewMode("detailed")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "detailed"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Detailed View
              </button>
              <button
                onClick={() => setViewMode("compact")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "compact"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Executive Summary
              </button>
            </div>

            {/* Quick Email Copy */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all"
              title="Copy Email Address"
            >
              {copiedEmail ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4 text-blue-400" />}
              <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs px-5 py-2 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <PrintIcon className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
          </div>
        </div>

        {}
        <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden print:bg-white print:border-b-2 print:border-black print:text-black print:p-0 print:shadow-none">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent rounded-bl-full pointer-events-none print:hidden"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800 print:border-slate-300">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider print:hidden">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Open for Opportunities
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white print:text-black">
                {RESUME_DATA.header.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 print:text-blue-800">
                {RESUME_DATA.header.title}
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-300 print:text-slate-800">
              <a href={`mailto:${RESUME_DATA.header.email}`} className="flex items-center gap-2.5 hover:text-blue-400 transition-colors">
                <MailIcon className="w-4 h-4 text-blue-400 print:text-black" />
                <span>{RESUME_DATA.header.email}</span>
              </a>
              <a href={`tel:${RESUME_DATA.header.phone}`} className="flex items-center gap-2.5 hover:text-blue-400 transition-colors">
                <PhoneIcon className="w-4 h-4 text-cyan-400 print:text-black" />
                <span>{RESUME_DATA.header.phone}</span>
              </a>
              <div className="flex items-center gap-2.5 text-slate-400 print:text-slate-800">
                <MapPinIcon className="w-4 h-4 text-indigo-400 print:text-black" />
                <span>{RESUME_DATA.header.location}</span>
              </div>
              <div className="flex items-center gap-3 pt-1 print:hidden">
                <a href={RESUME_DATA.header.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a href={RESUME_DATA.header.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="pt-6">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-blue-400 mb-2 print:text-slate-900">
              Professional Summary
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal print:text-slate-800">
              {RESUME_DATA.header.summary}
            </p>
          </div>

          {/* Highlight Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800/80 print:hidden">
            {RESUME_DATA.highlights.map((item, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-800 p-3.5 rounded-2xl text-center">
                <p className="text-lg sm:text-xl font-extrabold text-white">{item.value}</p>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 print:hidden">
          {[
            { id: "all", label: "Full Resume" },
            { id: "experience", label: "Work Experience" },
            { id: "skills", label: "Skill Matrix" },
            { id: "projects", label: "Projects & Education" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {}
        {(activeTab === "all" || activeTab === "experience") && (
          <section className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md print:bg-white print:border-none print:p-0 print:shadow-none">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800 print:border-slate-300">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center print:hidden">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white print:text-black">Professional Experience</h2>
                <p className="text-xs text-slate-400 print:hidden">Detailed career history and key technical accomplishments.</p>
              </div>
            </div>

            <div className="space-y-8 relative pl-2 sm:pl-4 border-l-2 border-slate-800 print:border-slate-300 print:pl-0">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative group print:mb-6">
                  {/* Timeline Bullet */}
                  <div className="absolute -left-[15px] sm:-left-[23px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors print:hidden"></div>

                  <div className="bg-slate-800/30 border border-slate-800/80 rounded-2xl p-5 sm:p-6 transition-all hover:border-slate-700 print:bg-white print:border-none print:p-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white print:text-black">{exp.role}</h3>
                        <p className="text-sm font-semibold text-blue-400 print:text-blue-800">{exp.company} <span className="text-slate-500 print:text-slate-600">• {exp.location}</span></p>
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold self-start sm:self-auto print:text-slate-800 print:border-slate-400">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-300 print:text-slate-800 list-disc list-inside leading-relaxed">
                      {exp.achievements.map((item, aIdx) => (
                        <li key={aIdx} className="marker:text-blue-400">
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    {viewMode === "detailed" && (
                      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-800/60 print:pt-2">
                        {exp.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-[11px] font-medium text-slate-300 print:bg-slate-100 print:text-black print:border-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {}
        {(activeTab === "all" || activeTab === "skills") && (
          <section className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md print:bg-white print:border-none print:p-0 print:shadow-none">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800 print:border-slate-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center print:hidden">
                <CodeIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white print:text-black">Technical Skill Matrix</h2>
                <p className="text-xs text-slate-400 print:hidden">Core tools, frameworks, and engineering competencies.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {RESUME_DATA.skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-slate-800/40 border border-slate-800 rounded-2xl p-5 space-y-4 print:bg-white print:border-slate-300">
                  <h3 className="text-base font-bold text-cyan-300 pb-2 border-b border-slate-800 print:text-black print:border-slate-300">
                    {skillGroup.category}
                  </h3>

                  <div className="space-y-3">
                    {skillGroup.items.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-semibold">
                          <span className="text-slate-200 print:text-black">{skill.name}</span>
                          <span className="text-blue-400 font-mono print:text-slate-600">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden print:bg-slate-200">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full print:bg-slate-800"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {}
        {(activeTab === "all" || activeTab === "projects") && (
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Featured Projects (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md print:bg-white print:border-none print:p-0">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800 print:border-slate-300">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center print:hidden">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white print:text-black">Key Featured Projects</h2>
                  <p className="text-xs text-slate-400 print:hidden">Selected highlights demonstrating technical depth.</p>
                </div>
              </div>

              <div className="space-y-6">
                {RESUME_DATA.projects.map((proj, idx) => (
                  <div key={idx} className="bg-slate-800/30 border border-slate-800 rounded-2xl p-5 space-y-3 print:bg-white print:border-slate-300">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white print:text-black">{proj.title}</h3>
                      <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 print:border-slate-300">
                        {proj.role}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                      {proj.description}
                    </p>
                    <p className="text-xs font-semibold text-emerald-400 print:text-emerald-700 flex items-center gap-1.5">
                      <BadgeCheckIcon className="w-4 h-4 shrink-0" />
                      <span>Impact: {proj.impact}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700/60 print:bg-slate-100 print:text-black">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Honors (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Education Card */}
              <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md print:bg-white print:border-none print:p-0">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800 print:border-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center print:hidden">
                    <AcademicCapIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-white print:text-black">Education</h2>
                  </div>
                </div>

                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-xs font-bold text-blue-400 print:text-blue-800">{edu.period}</span>
                    <h3 className="text-base font-bold text-white print:text-black">{edu.degree}</h3>
                    <p className="text-xs font-semibold text-slate-400 print:text-slate-700">{edu.institution} • {edu.grade}</p>
                    <p className="text-xs text-slate-300 print:text-slate-800 mt-2">{edu.details}</p>
                  </div>
                ))}
              </div>

              {/* Certifications & Honors */}
              <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md print:bg-white print:border-none print:p-0">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800 print:border-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center print:hidden">
                    <BadgeCheckIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-white print:text-black">Certifications & Honors</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 mb-2">Certifications</h4>
                    <ul className="space-y-2">
                      {RESUME_DATA.certifications.map((cert, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-slate-200 print:text-black flex items-center justify-between bg-slate-800/40 p-2.5 rounded-xl border border-slate-800 print:bg-white print:border-slate-300">
                          <span>{cert.name}</span>
                          <span className="text-xs text-cyan-400 font-mono print:text-slate-600">{cert.year}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 mb-2">Recognitions</h4>
                    <ul className="space-y-2">
                      {RESUME_DATA.honors.map((honor, idx) => (
                        <li key={idx} className="text-xs text-slate-300 print:text-black bg-slate-800/40 p-2.5 rounded-xl border border-slate-800 print:bg-white print:border-slate-300">
                          <p className="font-bold text-white print:text-black">{honor.title} <span className="text-blue-400 font-normal">({honor.issuer})</span></p>
                          <p className="text-[11px] text-slate-400 print:text-slate-700 mt-0.5">{honor.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {}
        <div className="text-center text-xs text-slate-500 pt-6 border-t border-slate-800/80 print:hidden">
          <p>© {new Date().getFullYear()} Rupesh Lal • Built with React, Tailwind CSS, & Modern Web Best Practices</p>
        </div>

      </div>
    </div>
  );
};

export default Resume;