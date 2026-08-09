import { Link } from "react-router-dom";

const BRAND_COLORS = {
  orange: "#fb8d2e",
  green: "#3aa540",
  yellow: "#fcca0a",
  azure: "#04abed",
};

const values = [
  {
    number: "01",
    title: "Build",
    description:
      "I believe in learning by building real projects and practical software solutions.",
    color: BRAND_COLORS.orange,
  },
  {
    number: "02",
    title: "Learn",
    description:
      "I continuously improve my technical, business, and problem-solving skills.",
    color: BRAND_COLORS.green,
  },
  {
    number: "03",
    title: "Create",
    description:
      "I turn ideas into useful digital experiences, websites, and software products.",
    color: BRAND_COLORS.yellow,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "I focus on creating solutions that help people, businesses, and products grow.",
    color: BRAND_COLORS.azure,
  },
];

const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and modern user interfaces with React and Tailwind CSS.",
    color: BRAND_COLORS.azure,
  },
  {
    title: "Web Development",
    description:
      "Creating fast, accessible, responsive, and user-focused websites.",
    color: BRAND_COLORS.orange,
  },
  {
    title: "Software Development",
    description:
      "Learning and building practical software systems with a focus on scalability.",
    color: BRAND_COLORS.green,
  },
  {
    title: "Business & Entrepreneurship",
    description:
      "Combining technology, business thinking, and customer needs to create useful solutions.",
    color: BRAND_COLORS.yellow,
  },
];

const journey = [
  {
    year: "01",
    title: "Learning",
    description:
      "Building strong foundations in programming, web development, and computer science.",
    color: BRAND_COLORS.orange,
  },
  {
    year: "02",
    title: "Building",
    description:
      "Turning concepts into real projects and continuously improving development skills.",
    color: BRAND_COLORS.green,
  },
  {
    year: "03",
    title: "Working",
    description:
      "Using development and digital skills to solve real problems for businesses and clients.",
    color: BRAND_COLORS.azure,
  },
  {
    year: "04",
    title: "Entrepreneurship",
    description:
      "Moving toward building software products, services, and a sustainable technology business.",
    color: BRAND_COLORS.yellow,
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <section
        aria-labelledby="about-title"
        className="relative isolate overflow-hidden"
      >
        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: BRAND_COLORS.orange }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: BRAND_COLORS.azure }}
        />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND_COLORS.azure }}
            >
              About Me
            </p>

            <h1
              id="about-title"
              className="text-5xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              Building with
              <span
                className="block"
                style={{ color: BRAND_COLORS.orange }}
              >
                purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              I'm Rupesh Lal Kumar, a software entrepreneur and developer
              focused on building useful digital products, websites, and
              software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <section
        aria-labelledby="introduction-title"
        className="border-y border-gray-100 bg-gray-50"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          {/* Left */}
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND_COLORS.orange }}
            >
              Who I Am
            </p>

            <h2
              id="introduction-title"
              className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              A developer with an entrepreneurial mindset.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-base leading-8 text-gray-600">
            <p>
              I am passionate about technology, software development, and
              entrepreneurship. My goal is to combine these areas to create
              practical solutions that solve real problems.
            </p>

            <p>
              My approach is simple: learn the fundamentals, build real
              projects, understand people and businesses, and continuously
              improve.
            </p>

            <p>
              I believe that becoming a great developer is not only about
              writing code. It is also about understanding users, business
              problems, design, performance, accessibility, and the complete
              product experience.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          BUILD / LEARN / CREATE / GROW
      ========================== */}
      <section
        aria-labelledby="values-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND_COLORS.green }}
            >
              My Philosophy
            </p>

            <h2
              id="values-title"
              className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              Build. Learn. Create. Grow.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              These four principles guide the way I approach technology,
              learning, projects, and entrepreneurship.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-black text-white"
                  style={{ backgroundColor: value.color }}
                  aria-hidden="true"
                >
                  {value.number}
                </div>

                <h3 className="mt-6 text-xl font-black text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SKILLS & FOCUS
      ========================== */}
      <section
        aria-labelledby="skills-title"
        className="bg-gray-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND_COLORS.azure }}
            >
              What I Do
            </p>

            <h2
              id="skills-title"
              className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              Areas I am building expertise in.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              I am developing a broad skill set that connects software
              development with business and entrepreneurship.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow duration-200 hover:shadow-md motion-reduce:transition-none"
              >
                <div className="flex items-start gap-5">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-12 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />

                  <div>
                    <h3 className="text-xl font-black text-gray-900">
                      {skill.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          JOURNEY
      ========================== */}
      <section
        aria-labelledby="journey-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND_COLORS.orange }}
            >
              My Journey
            </p>

            <h2
              id="journey-title"
              className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              From learning to entrepreneurship.
            </h2>
          </div>

          <div className="relative mt-12">
            {/* Timeline Line */}
            <div
              aria-hidden="true"
              className="absolute left-5 top-0 hidden h-full w-px sm:block"
              style={{ backgroundColor: "#e5e7eb" }}
            />

            <div className="space-y-8">
              {journey.map((item) => (
                <article
                  key={item.year}
                  className="relative flex gap-6"
                >
                  {/* Timeline Point */}
                  <div
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black text-white shadow-sm"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  >
                    {item.year}
                  </div>

                  <div className="pb-2">
                    <h3 className="text-xl font-black text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          MISSION
      ========================== */}
      <section
        aria-labelledby="mission-title"
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND_COLORS.azure }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
              My Mission
            </p>

            <h2
              id="mission-title"
              className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Build useful technology that creates real value.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              I want to keep learning, keep building, and use technology to
              create products and solutions that are useful for people and
              businesses.
            </p>

            <div className="mt-8">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gray-900 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#04abed] motion-reduce:transition-none"
              >
                Explore My Projects
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT CTA
      ========================== */}
      <section
        aria-labelledby="about-cta-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p
            className="text-sm font-bold uppercase tracking-[0.18em]"
            style={{ color: BRAND_COLORS.green }}
          >
            Let's Connect
          </p>

          <h2
            id="about-cta-title"
            className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Have an idea or project in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Let's discuss your idea and explore how technology can turn it
            into something useful.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb8d2e] focus-visible:ring-offset-2 motion-reduce:transition-none"
              style={{ backgroundColor: BRAND_COLORS.orange }}
            >
              Let's Work Together
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About; 