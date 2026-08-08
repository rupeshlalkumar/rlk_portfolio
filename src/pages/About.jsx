import React, { useState } from "react";

const SparklesIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const GraduationCapIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CodeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const TerminalIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const LayoutIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const DatabaseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CalendarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const DownloadIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const AwardIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const QUICK_INFO = [
  { label: "Name", value: "Rupesh Lal", icon: UserIcon },
  { label: "Email", value: "rupeshlal@itmodem.com", icon: MailIcon },
  { label: "Experience", value: "5+ Years", icon: CalendarIcon },
  { label: "Degree", value: "B.Tech in Computer Science", icon: GraduationCapIcon },
  { label: "Location", value: "Jharkhand, India", icon: MapPinIcon },
  { label: "Availability", value: "Open for Opportunities", icon: CheckCircleIcon, highlight: true },
];

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: LayoutIcon,
    skills: [
      { name: "React.js / Next.js", level: 95 },
      { name: "JavaScript (ES6+) / TypeScript", level: 90 },
      { name: "Tailwind CSS / HTML5 / CSS3", level: 95 },
      { name: "Redux Toolkit / Zustand", level: 85 },
      { name: "Responsive UI & Animations", level: 92 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    icon: DatabaseIcon,
    skills: [
      { name: "Node.js / Express.js", level: 88 },
      { name: "MongoDB / Mongoose", level: 85 },
      { name: "RESTful & GraphQL APIs", level: 90 },
      { name: "PostgreSQL / SQL", level: 80 },
      { name: "Auth (JWT / OAuth / NextAuth)", level: 88 },
    ],
  },
  {
    id: "tools",
    title: "UI/UX & Workflows",
    icon: TerminalIcon,
    skills: [
      { name: "Figma & Wireframing", level: 85 },
      { name: "Git / GitHub / CI/CD", level: 92 },
      { name: "Docker & Deployment (Vercel/AWS)", level: 80 },
      { name: "Postman / API Testing", level: 90 },
      { name: "Performance Optimization", level: 88 },
    ],
  },
];

const EXPERIENCE_DATA = [
  {
    period: "2023 - Present",
    role: "Senior Full Stack Engineer",
    company: "ITModem Solutions",
    description: "Leading frontend architecture and MERN stack web applications. Architected responsive micro-frontends and improved core web vitals by 40%.",
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    period: "2021 - 2023",
    role: "Frontend Developer & UI Specialist",
    company: "WebTech Studio",
    description: "Crafted intuitive, accessible, and high-performance UI components for fintech and enterprise web platforms using React and Figma.",
    tags: ["React.js", "Figma", "Redux", "REST APIs", "Sass"],
  },
  {
    period: "2019 - 2021",
    role: "Junior Web Developer",
    company: "Digital Edge Inc.",
    description: "Developed client web portals, implemented custom responsive UI components, and integrated third-party RESTful APIs.",
    tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Git"],
  },
];

const EDUCATION_DATA = [
  {
    period: "2016 - 2020",
    role: "B.Tech in Computer Science & Engineering",
    company: "State Technological University",
    description: "Graduated with Honors. Specialized in Software Engineering, Data Structures, Algorithms, and Web System Architecture.",
    tags: ["Data Structures", "Web Architectures", "Database Systems"],
  },
  {
    period: "2021",
    role: "Full Stack Web Development Certification",
    company: "Advanced Tech Academy",
    description: "Completed intensive practical training in MERN stack, state management, security protocols, and cloud deployments.",
    tags: ["MERN Stack", "System Design", "Cloud Hosting"],
  },
];

const PHILOSOPHY_CARDS = [
  {
    title: "Clean & Scalable Code",
    desc: "I write maintainable, modular, and readable code adhering to modern best practices and SOLID principles.",
    icon: CodeIcon,
  },
  {
    title: "User-Centric Design",
    desc: "Bridging the gap between aesthetics and functionality with intuitive layouts and delightful interactions.",
    icon: LayoutIcon,
  },
  {
    title: "Performance First",
    desc: "Optimizing bundle sizes, rendering cycles, and API loads for blazing fast user experiences across all devices.",
    icon: SparklesIcon,
  },
  {
    title: "Continuous Learning",
    desc: "Constantly expanding tech knowledge and adopting emerging technologies to deliver cutting-edge solutions.",
    icon: BriefcaseIcon,
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [timelineMode, setTimelineMode] = useState("experience");

  return (
    <section className="relative min-h-screen bg-[#071b2f] text-white py-16 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Lighting & Grid Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
      <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900/60 to-slate-800/80 border border-blue-500/30 px-4 py-2 rounded-full shadow-lg shadow-blue-500/10 backdrop-blur-md">
            <SparklesIcon className="w-4 h-4 text-cyan-400 animate-spin" />
            <span className="tracking-[3px] text-xs font-extrabold text-blue-300 uppercase">
              RLK / ABOUT ME
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Crafting Digital Experiences With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Code & Precision</span>
          </h1>

          <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed font-normal">
            Get to know the developer behind the terminal. A passionate Software Engineer dedicated to turning complex problems into elegant web solutions.
          </p>
        </div>

        {}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Bio Story Card */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                <UserIcon className="w-5 h-5" />
              </span>
              Who I Am
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Hello! I'm <strong className="text-white font-semibold">Rupesh Lal</strong>, a Full Stack Developer and UX/UI Designer based in Jharkhand, India. With over 5 years of hands-on experience, I specialize in engineering scalable web platforms using <strong className="text-cyan-300">React.js</strong>, <strong className="text-cyan-300">Node.js</strong>, <strong className="text-cyan-300">TypeScript</strong>, and modern CSS frameworks.
              </p>
              <p>
                My passion lies at the intersection of pixel-perfect UI design and robust backend architecture. Whether crafting smooth user flows or building resilient microservices, I hold code quality and user experience to the highest standards.
              </p>
              <p>
                When I'm not coding, you can find me exploring emerging UI design trends, mentoring aspiring developers, or experimenting with open-source tech stacks.
              </p>
            </div>

            {/* Quick Action Buttons inside Bio Card */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800">
              <a
                href="#download-cv"
                onClick={(e) => { e.preventDefault(); alert("Curriculum Vitae Download initiated!"); }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="mailto:rupeshlal@itmodem.com"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:text-white"
              >
                <MailIcon className="w-4 h-4 text-cyan-400" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Quick Facts Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {QUICK_INFO.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:bg-slate-800/40"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.label}</p>
                    <p className={`text-sm sm:text-base font-bold mt-0.5 ${item.highlight ? "text-emerald-400" : "text-white"}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white">Technical Skillset</h2>
            <p className="text-slate-400 text-sm mt-2">Tools, technologies, and stacks I work with daily.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl gap-2">
              {SKILL_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Skills List with Progress Bars */}
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-xl">
            {SKILL_CATEGORIES.filter((c) => c.id === activeTab).map((cat) => (
              <div key={cat.id} className="space-y-6">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-blue-400 font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Career & Education</h2>
              <p className="text-slate-400 text-sm mt-1">My professional timeline and academic qualification history.</p>
            </div>

            {/* Switcher Toggle */}
            <div className="inline-flex bg-slate-900 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
              <button
                onClick={() => setTimelineMode("experience")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  timelineMode === "experience"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setTimelineMode("education")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  timelineMode === "education"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Education
              </button>
            </div>
          </div>

          {/* Timeline Nodes */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10 max-w-4xl mx-auto">
            {(timelineMode === "experience" ? EXPERIENCE_DATA : EDUCATION_DATA).map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node Bullet */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></div>

                <div className="bg-slate-900/60 border border-slate-800/80 group-hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold rounded-full">
                      {item.period}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.company}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 bg-slate-800 text-slate-300 border border-slate-700/60 text-[11px] rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white">Development Philosophy</h2>
            <p className="text-slate-400 text-sm mt-2">Core tenets that drive my software design decisions.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 p-6 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-600/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {}
        <div className="bg-gradient-to-r from-blue-900/80 via-slate-900 to-indigo-900/80 border border-blue-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to collaborate on your next project?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a full-stack web app, custom React components, or UI design consultations, I'm available for freelance and full-time inquiries.
            </p>
            
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:rupeshlal@itmodem.com?subject=Project%20Collaboration"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-extrabold text-sm px-8 py-4 rounded-full shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <span>Start a Conversation</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;