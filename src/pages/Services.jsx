import { Link } from "react-router-dom";

const BRAND_COLORS = {
  orange: "#fb8d2e",
  green: "#3aa540",
  yellow: "#fcca0a",
  azure: "#04abed",
};

const services = [
  {
    number: "01",
    title: "Website Development",
    shortTitle: "Web Development",
    description:
      "Modern, responsive, and user-friendly websites designed to help businesses build a strong online presence.",
    features: [
      "Responsive Design",
      "Modern UI",
      "Fast Loading",
      "SEO-Friendly Structure",
      "Accessibility",
      "Mobile Optimization",
    ],
    color: BRAND_COLORS.orange,
  },
  {
    number: "02",
    title: "Frontend Development",
    shortTitle: "Frontend",
    description:
      "Interactive and responsive frontend experiences built with modern technologies and clean development practices.",
    features: [
      "React Development",
      "Tailwind CSS",
      "Reusable Components",
      "Responsive Layouts",
      "Performance Optimization",
      "Accessible Interfaces",
    ],
    color: BRAND_COLORS.azure,
  },
  {
    number: "03",
    title: "Software Development",
    shortTitle: "Software",
    description:
      "Practical software solutions designed around real business problems, workflows, and long-term growth.",
    features: [
      "Business Applications",
      "Custom Solutions",
      "Scalable Architecture",
      "Clean Code",
      "API Integration",
      "Continuous Improvement",
    ],
    color: BRAND_COLORS.green,
  },
  {
    number: "04",
    title: "Business Digital Solutions",
    shortTitle: "Digital Solutions",
    description:
      "Digital solutions that help businesses improve their online presence, customer experience, and daily operations.",
    features: [
      "Digital Strategy",
      "Business Websites",
      "Online Presence",
      "Customer Experience",
      "Digital Workflows",
      "Growth-Focused Solutions",
    ],
    color: BRAND_COLORS.yellow,
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand your business, goals, audience, requirements, and the problem that needs to be solved.",
    color: BRAND_COLORS.orange,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Create a clear structure for the project, user experience, technology, features, and development process.",
    color: BRAND_COLORS.green,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the solution using clean, responsive, accessible, and maintainable development practices.",
    color: BRAND_COLORS.azure,
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Test, optimize, learn from feedback, and continuously improve the final product.",
    color: BRAND_COLORS.yellow,
  },
];

const qualityStandards = [
  {
    title: "Performance",
    description:
      "Lightweight implementation with a focus on fast loading and efficient rendering.",
    color: BRAND_COLORS.azure,
  },
  {
    title: "Accessibility",
    description:
      "Semantic HTML, keyboard navigation, visible focus states, and accessible content structure.",
    color: BRAND_COLORS.green,
  },
  {
    title: "Responsive",
    description:
      "Interfaces designed to work smoothly across mobile, tablet, laptop, and desktop screens.",
    color: BRAND_COLORS.orange,
  },
  {
    title: "Maintainable",
    description:
      "Organized and reusable code that is easier to understand, update, test, and scale.",
    color: BRAND_COLORS.yellow,
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <section
        aria-labelledby="services-title"
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
              My Services
            </p>

            <h1
              id="services-title"
              className="text-5xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              Digital solutions
              <span
                className="block"
                style={{ color: BRAND_COLORS.orange }}
              >
                built with purpose.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              I build websites, frontend experiences, software solutions, and
              digital systems that help people and businesses solve real
              problems and grow online.
            </p>

            {/* Header CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2 motion-reduce:transition-none"
                style={{ backgroundColor: BRAND_COLORS.azure }}
              >
                Discuss Your Project
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-6 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb8d2e] focus-visible:ring-offset-2 motion-reduce:transition-none"
                style={{
                  borderColor: BRAND_COLORS.orange,
                  color: BRAND_COLORS.orange,
                }}
              >
                View My Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES INTRO
      ========================== */}
      <section
        aria-labelledby="services-intro-title"
        className="border-y border-gray-100 bg-gray-50"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND_COLORS.green }}
            >
              What I Can Help With
            </p>

            <h2
              id="services-intro-title"
              className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              Technology that supports your goals.
            </h2>
          </div>

          <div className="space-y-4 text-base leading-8 text-gray-600">
            <p>
              Every project starts with understanding the actual problem
              instead of simply choosing a technology.
            </p>

            <p>
              I focus on creating digital solutions that are useful,
              responsive, accessible, maintainable, and aligned with the
              needs of the people using them.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES GRID
      ========================== */}
      <section
        aria-labelledby="services-list-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND_COLORS.orange }}
            >
              Services
            </p>

            <h2
              id="services-list-title"
              className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              Solutions for different digital needs.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              From websites to software solutions, I focus on building
              practical digital products with a strong foundation.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none sm:p-8"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between gap-6">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white shadow-sm"
                    style={{ backgroundColor: service.color }}
                    aria-hidden="true"
                  >
                    {service.number}
                  </div>

                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: `${service.color}12`,
                      color: service.color,
                    }}
                  >
                    {service.shortTitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-black tracking-tight text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-7 border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-bold text-gray-900">
                    What's included
                  </h4>

                  <ul
                    className="mt-4 grid gap-3 sm:grid-cols-2"
                    aria-label={`${service.title} features`}
                  >
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-black text-white"
                          style={{ backgroundColor: service.color }}
                        >
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-7 border-t border-gray-100 pt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-lg text-sm font-bold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2"
                    style={{ color: service.color }}
                    aria-label={`Discuss ${service.title}`}
                  >
                    Discuss this service
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          QUALITY STANDARDS
      ========================== */}
      <section
        aria-labelledby="quality-title"
        className="bg-gray-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND_COLORS.azure }}
            >
              Quality Standards
            </p>

            <h2
              id="quality-title"
              className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              Built for quality, not just appearance.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Good development means more than making something look good.
              Every solution should provide a reliable and usable experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStandards.map((standard) => (
              <article
                key={standard.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div
                  aria-hidden="true"
                  className="h-1.5 w-12 rounded-full"
                  style={{ backgroundColor: standard.color }}
                />

                <h3 className="mt-6 text-xl font-black text-gray-900">
                  {standard.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {standard.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          WORK PROCESS
      ========================== */}
      <section
        aria-labelledby="process-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.18em]"
              style={{ color: BRAND_COLORS.green }}
            >
              How I Work
            </p>

            <h2
              id="process-title"
              className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
            >
              A simple process from idea to solution.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              A clear process keeps the project focused, reduces unnecessary
              complexity, and makes continuous improvement easier.
            </p>
          </div>

          <div className="relative mt-12">
            {/* Timeline */}
            <div
              aria-hidden="true"
              className="absolute left-5 top-0 hidden h-full w-px bg-gray-200 sm:block"
            />

            <div className="space-y-8">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="relative flex gap-6"
                >
                  {/* Number */}
                  <div
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black text-white shadow-sm"
                    style={{ backgroundColor: step.color }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <h3 className="text-xl font-black text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section
        aria-labelledby="services-cta-title"
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND_COLORS.orange }}
      >
        {/* Decorative Shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white opacity-10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white opacity-10"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
            Start a Project
          </p>

          <h2
            id="services-cta-title"
            className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Have a problem that technology can solve?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90">
            Tell me about your idea, business, or project. We can discuss the
            requirements and find a practical digital solution.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gray-900 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#fb8d2e] motion-reduce:transition-none"
            >
              Let's Talk
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;