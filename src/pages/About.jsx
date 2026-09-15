import { Link } from "react-router-dom";

/* =========================================================
   RLK BRAND SYSTEM
========================================================= */

const BRAND = {
  orange: "#fb8d2e",
  green: "#3aa540",
  yellow: "#fcca0a",
  azure: "#04abed",
  black: "#0f172a",
  white: "#ffffff",
};

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

const SectionLabel = ({ children, color = BRAND.orange }) => (
  <p
    className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em]"
    style={{ color }}
  >
    {children}
  </p>
);

const NumberBadge = ({ number, color }) => (
  <div
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-black text-white"
    style={{ backgroundColor: color }}
  >
    {number}
  </div>
);

const Arrow = () => (
  <span aria-hidden="true" className="text-lg">
    →
  </span>
);

const ArrowButton = ({
  to,
  children,
  filled = true,
  color = BRAND.orange,
}) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
    style={
      filled
        ? {
            backgroundColor: color,
            color: BRAND.white,
            boxShadow: `0 8px 24px ${color}30`,
          }
        : {
            border: `1.5px solid ${color}`,
            color,
            backgroundColor: BRAND.white,
          }
    }
  >
    {children}
    <Arrow />
  </Link>
);

const MiniIcon = ({ color, children }) => (
  <div
    className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
    style={{ backgroundColor: color }}
  >
    {children}
  </div>
);

/* =========================================================
   DATA
========================================================= */

const values = [
  {
    number: "01",
    title: "Build",
    description:
      "Turn ideas into real projects, businesses, products, and practical solutions.",
    color: BRAND.orange,
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Continuously develop knowledge, skills, judgment, and understanding.",
    color: BRAND.green,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Create useful things that provide genuine value to people and businesses.",
    color: BRAND.azure,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Improve continuously and build things that can grow over time.",
    color: BRAND.yellow,
  },
];

const focusAreas = [
  {
    title: "Entrepreneurship",
    description:
      "Exploring opportunities, understanding markets, solving problems, and building sustainable businesses.",
    color: BRAND.orange,
  },
  {
    title: "Product Building",
    description:
      "Turning ideas and real problems into useful products and services.",
    color: BRAND.azure,
  },
  {
    title: "Technology",
    description:
      "Using software and technology to build, automate, experiment, and solve problems.",
    color: BRAND.green,
  },
  {
    title: "Business Development",
    description:
      "Understanding customers, creating value, acquiring opportunities, and developing businesses.",
    color: BRAND.yellow,
  },
];

const process = [
  {
    number: "01",
    title: "Problem",
    description: "Understand the real need.",
    color: BRAND.orange,
  },
  {
    number: "02",
    title: "Understand",
    description: "Study people and context.",
    color: BRAND.green,
  },
  {
    number: "03",
    title: "Explore",
    description: "Find possible solutions.",
    color: BRAND.azure,
  },
  {
    number: "04",
    title: "Create",
    description: "Build a practical solution.",
    color: BRAND.yellow,
  },
  {
    number: "05",
    title: "Test",
    description: "Validate with real users.",
    color: BRAND.orange,
  },
  {
    number: "06",
    title: "Improve",
    description: "Learn and iterate.",
    color: BRAND.green,
  },
  {
    number: "07",
    title: "Grow",
    description: "Scale what works.",
    color: BRAND.azure,
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description: "Study the problem, customer, market, and context.",
    color: BRAND.orange,
  },
  {
    number: "02",
    title: "Experiment",
    description: "Turn assumptions into small experiments.",
    color: BRAND.green,
  },
  {
    number: "03",
    title: "Build",
    description: "Create a practical solution.",
    color: BRAND.azure,
  },
  {
    number: "04",
    title: "Improve",
    description: "Use feedback, data, and experience to make it better.",
    color: BRAND.yellow,
  },
];

const journey = [
  {
    number: "01",
    title: "Learning",
    description:
      "Building strong foundations across different areas of knowledge and skills.",
    color: BRAND.green,
  },
  {
    number: "02",
    title: "Building",
    description:
      "Turning knowledge and ideas into real projects and practical work.",
    color: BRAND.azure,
  },
  {
    number: "03",
    title: "Working",
    description:
      "Using skills to solve real problems and create value for people and businesses.",
    color: BRAND.orange,
  },
  {
    number: "04",
    title: "Entrepreneurship",
    description:
      "Building businesses, products, services, and long-term opportunities.",
    color: BRAND.yellow,
  },
];

const interests = [
  "Entrepreneurship",
  "Business",
  "Technology",
  "Software Development",
  "Product Building",
  "Marketing",
  "Sales",
  "Personal Growth",
  "Learning",
  "Books & Ideas",
  "Research",
  "Innovation",
];

const principles = [
  {
    number: "01",
    title: "Create Value",
    description: "Build things that are genuinely useful.",
    color: BRAND.orange,
  },
  {
    number: "02",
    title: "Keep Learning",
    description: "Stay curious and continuously improve.",
    color: BRAND.green,
  },
  {
    number: "03",
    title: "Take Action",
    description: "Ideas become meaningful when they are tested in reality.",
    color: BRAND.azure,
  },
  {
    number: "04",
    title: "Think Long Term",
    description:
      "Build skills, relationships, businesses, and products for lasting value.",
    color: BRAND.yellow,
  },
  {
    number: "05",
    title: "Stay Practical",
    description: "Focus on what works in the real world.",
    color: BRAND.orange,
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

const About = () => {
  return (
    <main className="min-h-screen bg-white pt-20 text-[#0f172a]">
      {/* =====================================================
          01. HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-[#0f172a]/10">
        {/* Brand atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: `${BRAND.orange}12` }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${BRAND.azure}12` }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-20">
          {/* Hero Content */}
          <div className="relative z-10">
            <SectionLabel color={BRAND.azure}>About Me</SectionLabel>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
              Building with
              <span
                className="block"
                style={{ color: BRAND.orange }}
              >
                purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#0f172a]/70 sm:text-lg">
              I'm Rupesh Lal Kumar, an entrepreneur focused on building useful
              businesses, products, and solutions that solve real problems.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#0f172a]/60 sm:text-base">
              I combine entrepreneurship, technology, creativity, and
              continuous learning to turn ideas into action.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ArrowButton to="/projects" color={BRAND.orange}>
                View My Work
              </ArrowButton>

              <ArrowButton
                to="/contact"
                filled={false}
                color={BRAND.azure}
              >
                Let's Talk
              </ArrowButton>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative min-h-[430px]">
            {/* Orange geometric shape */}
            <div
              className="absolute right-2 top-8 h-[300px] w-[72%] rounded-3xl"
              style={{
                backgroundColor: BRAND.orange,
                transform: "skewY(-10deg)",
              }}
            />

            {/* Azure shape */}
            <div
              className="absolute bottom-8 right-0 h-28 w-44 rounded-2xl opacity-90"
              style={{
                backgroundColor: BRAND.azure,
                transform: "skewY(8deg)",
              }}
            />

            {/* Dot pattern */}
            <div
              className="absolute right-0 top-20 h-36 w-28 opacity-70"
              style={{
                backgroundImage: `radial-gradient(${BRAND.azure} 1.5px, transparent 1.5px)`,
                backgroundSize: "10px 10px",
              }}
            />

            {/* Portrait */}
            <div className="absolute bottom-0 left-[12%] right-[8%] top-4 overflow-hidden rounded-[32px]">
              <img
                src="/profile.png"
                alt="Rupesh Lal Kumar"
                className="h-full w-full object-contain object-bottom"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Fallback visual */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-white">
                <div
                  className="flex h-48 w-48 items-center justify-center rounded-full text-6xl font-black text-white"
                  style={{ backgroundColor: BRAND.orange }}
                >
                  RLK
                </div>
              </div>
            </div>

            {/* Handwritten-style idea block */}
            <div className="absolute right-0 top-12 hidden w-32 rotate-[-3deg] text-sm font-semibold leading-6 sm:block">
              <span style={{ color: BRAND.black }}>
                Ideas
                <br />
                → Products
                <br />
                → Businesses
                <br />
                → Impact
              </span>

              <div
                className="mt-2 text-3xl"
                style={{ color: BRAND.orange }}
              >
                ↙
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. WHO I AM
      ====================================================== */}

      <section className="border-b border-[#0f172a]/10 bg-[#0f172a]/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
          <div>
            <SectionLabel color={BRAND.orange}>Who I Am</SectionLabel>

            <h2 className="max-w-xl text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              An entrepreneur who builds, learns, and creates.
            </h2>

            <div
              className="mt-7 h-1 w-16 rounded-full"
              style={{ backgroundColor: BRAND.orange }}
            />
          </div>

          <div className="space-y-5 text-base leading-8 text-[#0f172a]/70">
            <p>
              I am an entrepreneur interested in building businesses,
              exploring opportunities, solving problems, and creating useful
              products and services.
            </p>

            <p>
              Technology and software development are important capabilities
              in my journey, but entrepreneurship is at the center of what I
              do.
            </p>

            <p>
              My goal is to understand real problems, create valuable
              solutions, and continuously improve as an entrepreneur.
            </p>

            <div className="grid gap-4 pt-3 sm:grid-cols-2">
              <div
                className="rounded-2xl border bg-white p-6"
                style={{ borderColor: `${BRAND.orange}55` }}
              >
                <MiniIcon color={BRAND.orange}>◆</MiniIcon>

                <h3 className="mt-5 text-lg font-black">
                  Entrepreneurship
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-[#0f172a]/65">
                  <li>• Business</li>
                  <li>• Products</li>
                  <li>• Customers</li>
                  <li>• Opportunities</li>
                  <li>• Growth</li>
                </ul>
              </div>

              <div
                className="rounded-2xl border bg-white p-6"
                style={{ borderColor: `${BRAND.azure}55` }}
              >
                <MiniIcon color={BRAND.azure}>{"</>"}</MiniIcon>

                <h3 className="mt-5 text-lg font-black">
                  Capabilities
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-[#0f172a]/65">
                  <li>• Technology</li>
                  <li>• Development</li>
                  <li>• Design</li>
                  <li>• Learning</li>
                  <li>• Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03. PHILOSOPHY
      ====================================================== */}

      <section className="border-b border-[#0f172a]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <SectionLabel color={BRAND.green}>My Philosophy</SectionLabel>

            <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Build. Learn. Create. Grow.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#0f172a]/65">
              These four principles guide how I approach entrepreneurship,
              learning, technology, projects, and personal growth.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="group rounded-2xl border border-[#0f172a]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0f172a]/20"
                style={{
                  boxShadow: `0 10px 30px ${value.color}08`,
                }}
              >
                <NumberBadge
                  number={value.number}
                  color={value.color}
                />

                <h3 className="mt-6 text-xl font-black">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#0f172a]/65">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          04. WHAT I DO
      ====================================================== */}

      <section className="border-b border-[#0f172a]/10 bg-[#0f172a]/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionLabel color={BRAND.azure}>What I Do</SectionLabel>

          <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            I build and grow.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#0f172a]/65">
            I connect entrepreneurship, technology, creativity, and practical
            problem-solving to create useful outcomes.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {/* Featured Entrepreneurship Card */}
            <article
              className="relative min-h-[320px] overflow-hidden rounded-2xl p-7 text-white"
              style={{ backgroundColor: BRAND.orange }}
            >
              <div
                className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full opacity-20"
                style={{ backgroundColor: BRAND.white }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <MiniIcon color="rgba(255,255,255,0.2)">
                    ◆
                  </MiniIcon>

                  <h3 className="mt-6 text-2xl font-black">
                    Entrepreneurship
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/85">
                    Exploring opportunities, understanding markets, solving
                    problems, and building sustainable businesses.
                  </p>
                </div>

                <Link
                  to="/services"
                  className="mt-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold transition-transform hover:translate-x-1"
                  style={{ color: BRAND.orange }}
                >
                  →
                </Link>
              </div>
            </article>

            {/* Other Areas */}
            <div className="grid gap-5 sm:grid-cols-2">
              {focusAreas.slice(1).map((area) => (
                <article
                  key={area.title}
                  className="rounded-2xl border border-[#0f172a]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="mb-5 h-1 w-10 rounded-full"
                    style={{ backgroundColor: area.color }}
                  />

                  <h3 className="text-lg font-black">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#0f172a]/65">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05. HOW I THINK
      ====================================================== */}

      <section className="border-b border-[#0f172a]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <SectionLabel color={BRAND.orange}>
                How I Think
              </SectionLabel>

              <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                Start with the problem.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#0f172a]/65">
                The right solution begins with understanding a real problem.
              </p>
            </div>

            <div className="overflow-x-auto pb-3">
              <div className="flex min-w-[900px] items-start">
                {process.map((item, index) => (
                  <div
                    key={item.number}
                    className="flex flex-1 items-start"
                  >
                    <div className="min-w-[105px]">
                      <div
                        className="mx-auto flex h-11 w-11 items-center justify-center rounded-full text-xs font-black text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.number}
                      </div>

                      <h3 className="mt-3 text-center text-sm font-black">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-center text-[11px] leading-5 text-[#0f172a]/55">
                        {item.description}
                      </p>
                    </div>

                    {index < process.length - 1 && (
                      <div
                        className="mt-5 h-px w-full min-w-6"
                        style={{
                          backgroundColor: `${item.color}55`,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06. MY APPROACH
      ====================================================== */}

      <section className="border-b border-[#0f172a]/10 bg-[#0f172a]/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionLabel color={BRAND.green}>My Approach</SectionLabel>

          <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">
            Learn deeply. Build practically.
          </h2>

          <div className="mt-10 grid gap-0 border-y border-[#0f172a]/10 lg:grid-cols-4">
            {approach.map((item, index) => (
              <article
                key={item.number}
                className={`p-6 ${
                  index !== approach.length - 1
                    ? "border-b lg:border-b-0 lg:border-r"
                    : ""
                }`}
                style={{
                  borderColor: `${item.color}35`,
                }}
              >
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-black"
                  style={{
                    borderColor: item.color,
                    color: item.color,
                  }}
                >
                  {item.number}
                </div>

                <h3 className="text-lg font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#0f172a]/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          07. MY JOURNEY
      ====================================================== */}

      <section className="border-b border-[#0f172a]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionLabel color={BRAND.orange}>My Journey</SectionLabel>

          <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">
            From learning to entrepreneurship.
          </h2>

          <div className="mt-10 max-w-4xl">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-5 left-5 top-5 w-px"
                style={{
                  backgroundColor: `${BRAND.azure}30`,
                }}
              />

              <div className="space-y-7">
                {journey.map((item) => (
                  <article
                    key={item.number}
                    className="relative flex gap-6"
                  >
                    <div
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.number}
                    </div>

                    <div className="pt-1">
                      <h3 className="text-xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-[#0f172a]/60">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          08. CURRENTLY BUILDING
      ====================================================== */}

      <section className="border-b border-[#0f172a]/10 bg-[#0f172a]/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel color={BRAND.azure}>
                Currently Building
              </SectionLabel>

              <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                Turning ideas into reality.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#0f172a]/60">
                Exploring ideas, building capabilities, and creating useful
                things through entrepreneurship and technology.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Businesses",
                  text: "Building and exploring entrepreneurial ventures.",
                  color: BRAND.orange,
                },
                {
                  title: "Products",
                  text: "Developing useful products and solutions around real needs.",
                  color: BRAND.green,
                },
                {
                  title: "Technology",
                  text: "Using technology to support ideas, businesses, and experimentation.",
                  color: BRAND.azure,
                },
                {
                  title: "Personal Brand",
                  text: "Sharing what I learn, build, and discover along the journey.",
                  color: BRAND.yellow,
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#0f172a]/10 bg-white p-6"
                >
                  <MiniIcon color={item.color}>◆</MiniIcon>

                  <h3 className="mt-5 text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#0f172a]/60">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          09. INTERESTS / PRINCIPLES / WORK
      ====================================================== */}

      <section className="border-b border-[#0f172a]/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 sm:px-8 lg:grid-cols-3 lg:px-10">
          {/* Interests */}
          <div className="border-b py-12 lg:border-b-0 lg:border-r lg:pr-8">
            <SectionLabel color={BRAND.azure}>
              Areas of Interest
            </SectionLabel>

            <h2 className="text-2xl font-black">
              What I'm exploring.
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {interests.map((interest, index) => {
                const colors = [
                  BRAND.orange,
                  BRAND.green,
                  BRAND.azure,
                  BRAND.yellow,
                ];

                const color = colors[index % colors.length];

                return (
                  <span
                    key={interest}
                    className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                    style={{
                      borderColor: `${color}80`,
                      color,
                    }}
                  >
                    {interest}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Principles */}
          <div className="border-b py-12 lg:border-b-0 lg:border-r lg:px-8">
            <SectionLabel color={BRAND.orange}>
              My Principles
            </SectionLabel>

            <h2 className="text-2xl font-black">
              Principles I try to live and work by.
            </h2>

            <div className="mt-6 space-y-4">
              {principles.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4"
                >
                  <span
                    className="text-xs font-black"
                    style={{ color: item.color }}
                  >
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-sm font-black">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#0f172a]/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Work */}
          <div className="py-12 lg:pl-8">
            <SectionLabel color={BRAND.azure}>
              Selected Work
            </SectionLabel>

            <h2 className="text-2xl font-black">
              Things I've built and worked on.
            </h2>

            <div className="mt-6 space-y-4">
              <article className="overflow-hidden rounded-2xl border border-[#0f172a]/10">
                <div
                  className="flex h-32 items-center justify-center"
                  style={{
                    backgroundColor: `${BRAND.azure}10`,
                  }}
                >
                  <div
                    className="rounded-xl border bg-white px-5 py-4 text-sm font-black"
                    style={{ borderColor: `${BRAND.azure}40` }}
                  >
                    RLK Project
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-black">
                    Featured Project
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#0f172a]/55">
                    A practical digital project built around a real problem.
                  </p>

                  <Link
                    to="/projects"
                    className="mt-3 inline-flex text-xs font-bold"
                    style={{ color: BRAND.azure }}
                  >
                    View Project →
                  </Link>
                </div>
              </article>

              <Link
                to="/projects"
                className="block text-sm font-bold"
                style={{ color: BRAND.orange }}
              >
                View all projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          10. BEYOND BUSINESS / VISION / RIGHT NOW
      ====================================================== */}

      <section className="border-b border-[#0f172a]/10 bg-[#0f172a]/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 sm:px-8 lg:grid-cols-3 lg:px-10">
          {/* Beyond */}
          <div className="border-b py-12 lg:border-b-0 lg:border-r lg:pr-8">
            <SectionLabel color={BRAND.green}>
              Beyond Business
            </SectionLabel>

            <h2 className="text-2xl font-black">
              Always learning. Always exploring.
            </h2>

            <div className="mt-7 grid grid-cols-2 gap-y-4 text-sm text-[#0f172a]/65">
              <span>Books</span>
              <span>Education</span>
              <span>Languages</span>
              <span>Philosophy</span>
              <span>Personal Growth</span>
              <span>Research</span>
              <span>Technology</span>
              <span>History</span>
            </div>
          </div>

          {/* Vision */}
          <div className="border-b py-12 lg:border-b-0 lg:border-r lg:px-8">
            <SectionLabel color={BRAND.orange}>
              My Vision
            </SectionLabel>

            <h2 className="text-2xl font-black">
              Build businesses that create real value.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#0f172a]/60">
              My long-term goal is to become a capable entrepreneur who can
              identify meaningful opportunities, build strong businesses,
              create useful products, and continuously learn from reality.
            </p>

            <div
              className="mt-5 h-1 w-10 rounded-full"
              style={{ backgroundColor: BRAND.orange }}
            />
          </div>

          {/* Right Now */}
          <div className="py-12 lg:pl-8">
            <SectionLabel color={BRAND.azure}>
              Right Now
            </SectionLabel>

            <h2 className="text-2xl font-black">
              What I'm focused on.
            </h2>

            <div className="mt-6 space-y-4">
              {[
                ["01", "Building", "Businesses & Products"],
                ["02", "Learning", "Business & Technology"],
                ["03", "Developing", "Practical Skills"],
                ["04", "Exploring", "New Opportunities"],
              ].map(([number, title, subtitle], index) => {
                const colors = [
                  BRAND.orange,
                  BRAND.green,
                  BRAND.azure,
                  BRAND.yellow,
                ];

                return (
                  <div
                    key={number}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="text-xs font-black"
                      style={{ color: colors[index] }}
                    >
                      {number}
                    </span>

                    <div>
                      <h3 className="text-sm font-black">
                        {title}
                      </h3>

                      <p className="mt-0.5 text-xs text-[#0f172a]/50">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          11. FINAL CTA
      ====================================================== */}

      <section className="px-6 py-10 sm:px-8 lg:px-10">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-7 py-10 text-white sm:px-10 lg:px-14 lg:py-12"
          style={{ backgroundColor: BRAND.black }}
        >
          {/* Decorative brand shapes */}
          <div
            className="absolute -left-10 -top-10 h-28 w-28 rounded-full"
            style={{ backgroundColor: BRAND.orange }}
          />

          <div
            className="absolute -bottom-14 -right-8 h-36 w-36 rounded-full"
            style={{ backgroundColor: BRAND.azure }}
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <SectionLabel color={BRAND.yellow}>
                Let's Connect
              </SectionLabel>

              <h2 className="max-w-2xl text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                Have an idea worth building?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                Whether you want to discuss a project, business opportunity,
                collaboration, or simply exchange ideas, I'd be happy to
                connect.
              </p>
            </div>

            <ArrowButton
              to="/contact"
              color={BRAND.orange}
            >
              Let's Talk
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* =====================================================
          12. SMALL ABOUT FOOTER
      ====================================================== */}

      <section className="border-t border-[#0f172a]/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h3 className="text-base font-black">
              Rupesh Lal Kumar
            </h3>

            <p
              className="mt-1 text-xs font-bold"
              style={{ color: BRAND.orange }}
            >
              Entrepreneur
            </p>
          </div>

          <div
            className="text-sm font-bold"
            style={{ color: BRAND.black }}
          >
            Build. Learn. Create. Grow.
          </div>

          <Link
            to="/contact"
            className="text-sm font-bold"
            style={{ color: BRAND.azure }}
          >
            Let's Talk →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;