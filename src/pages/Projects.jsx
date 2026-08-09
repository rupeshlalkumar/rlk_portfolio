import { Link } from "react-router-dom";

const BRAND_COLORS = {
  orange: "#fb8d2e",
  green: "#3aa540",
  yellow: "#fcca0a",
  azure: "#04abed",
};

const projects = [
  {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A modern personal portfolio website designed to showcase skills, projects, services, and professional work.",
    technologies: ["React", "Tailwind CSS", "React Router"],
    color: BRAND_COLORS.azure,
    status: "In Progress",
  },
  {
    title: "Business Website",
    category: "Web Development",
    description:
      "A professional business website focused on presenting services, building trust, and helping businesses establish a strong online presence.",
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    color: BRAND_COLORS.orange,
    status: "Completed",
  },
  {
    title: "Local Business Solution",
    category: "Business & Digital",
    description:
      "A digital solution concept focused on helping local businesses improve their online visibility and customer acquisition.",
    technologies: ["Web Development", "Local SEO", "Digital Strategy"],
    color: BRAND_COLORS.green,
    status: "In Progress",
  },
  {
    title: "Software Product",
    category: "Software Development",
    description:
      "A software product concept focused on solving practical business problems through a scalable digital system.",
    technologies: ["JavaScript", "React", "Node.js"],
    color: BRAND_COLORS.yellow,
    status: "Planning",
  },
];

const categories = [
  {
    name: "Web Development",
    color: BRAND_COLORS.orange,
  },
  {
    name: "Software Development",
    color: BRAND_COLORS.green,
  },
  {
    name: "Business & Digital",
    color: BRAND_COLORS.azure,
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <section
        aria-labelledby="projects-title"
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
              My Work
            </p>

            <h1
              id="projects-title"
              className="text-5xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              Projects that
              <span
                className="block"
                style={{ color: BRAND_COLORS.orange }}
              >
                turn ideas into reality.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Explore the websites, software projects, and digital solutions
              I am building to strengthen my skills and solve real-world
              problems.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          PROJECT CATEGORIES
      ========================== */}
      <section
        aria-labelledby="categories-title"
        className="border-y border-gray-100 bg-gray-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND_COLORS.green }}
            >
              Areas of Work
            </p>

            <h2
              id="categories-title"
              className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              What I build.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="h-12 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: category.color }}
                />

                <h3 className="text-base font-bold text-gray-900">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PROJECT GRID
      ========================== */}
      <section
        aria-labelledby="featured-projects-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          {/* Section Heading */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
                style={{ color: BRAND_COLORS.orange }}
              >
                Selected Projects
              </p>

              <h2
                id="featured-projects-title"
                className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
              >
                Things I'm building.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-600">
              Every project is an opportunity to learn, experiment, improve,
              and create something useful.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none"
              >
                {/* Project Visual */}
                <div
                  className="relative flex h-52 items-center justify-center overflow-hidden"
                  style={{
                    backgroundColor: `${project.color}12`,
                  }}
                >
                  {/* Decorative Shapes */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20"
                    style={{ backgroundColor: project.color }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -bottom-12 -left-12 h-36 w-36 rotate-12 rounded-3xl opacity-10"
                    style={{ backgroundColor: project.color }}
                  />

                  {/* Project Mark */}
                  <div
                    className="relative flex h-24 w-24 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-lg transition-transform duration-200 group-hover:scale-105 motion-reduce:transition-none"
                    style={{ backgroundColor: project.color }}
                    aria-hidden="true"
                  >
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 3)}
                  </div>

                  {/* Status */}
                  <span
                    className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-bold shadow-sm"
                    style={{ color: project.color }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-7">
                  <p
                    className="text-xs font-bold uppercase tracking-[0.15em]"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div
                    className="mt-6 flex flex-wrap gap-2"
                    aria-label={`Technologies used in ${project.title}`}
                  >
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project Action */}
                  <div className="mt-7 border-t border-gray-100 pt-6">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg text-sm font-bold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2"
                      style={{ color: project.color }}
                      aria-label={`View details for ${project.title}`}
                    >
                      View Project
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                      >
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          DEVELOPMENT APPROACH
      ========================== */}
      <section
        aria-labelledby="approach-title"
        className="bg-gray-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Heading */}
            <div>
              <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
                style={{ color: BRAND_COLORS.azure }}
              >
                My Approach
              </p>

              <h2
                id="approach-title"
                className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
              >
                I don't just build projects.
                <span
                  className="block"
                  style={{ color: BRAND_COLORS.orange }}
                >
                  I build with purpose.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
                My development process focuses on understanding the problem,
                planning the solution, building carefully, testing the result,
                and continuously improving the product.
              </p>
            </div>

            {/* Process */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <span
                  className="text-sm font-black"
                  style={{ color: BRAND_COLORS.orange }}
                >
                  01
                </span>

                <h3 className="mt-3 text-lg font-black text-gray-900">
                  Understand
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Understand the user, problem, requirements, and desired
                  outcome.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <span
                  className="text-sm font-black"
                  style={{ color: BRAND_COLORS.green }}
                >
                  02
                </span>

                <h3 className="mt-3 text-lg font-black text-gray-900">
                  Plan
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Plan the structure, technology, user experience, and
                  development process.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <span
                  className="text-sm font-black"
                  style={{ color: BRAND_COLORS.yellow }}
                >
                  03
                </span>

                <h3 className="mt-3 text-lg font-black text-gray-900">
                  Build
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Build clean, responsive, accessible, and maintainable
                  solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <span
                  className="text-sm font-black"
                  style={{ color: BRAND_COLORS.azure }}
                >
                  04
                </span>

                <h3 className="mt-3 text-lg font-black text-gray-900">
                  Improve
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Test, measure, learn, optimize, and continuously improve the
                  final product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section
        aria-labelledby="projects-cta-title"
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND_COLORS.green }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
            Have a Project?
          </p>

          <h2
            id="projects-cta-title"
            className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Let's build something useful together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90">
            Have an idea, website requirement, or software project? Let's
            discuss the problem and find the right solution.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gray-900 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3aa540] motion-reduce:transition-none"
            >
              Start a Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;