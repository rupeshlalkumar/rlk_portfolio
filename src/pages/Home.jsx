import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import profile from "../data/profile";
import businesses from "../data/businesses";
import projects from "../data/projects";
import journey from "../data/journey";
import content from "../data/content";

const accentStyles = {
  orange: {
    border: "border-orange-400",
    text: "text-orange-600",
    background: "bg-orange-50",
  },
  green: {
    border: "border-green-500",
    text: "text-green-600",
    background: "bg-green-50",
  },
  yellow: {
    border: "border-yellow-400",
    text: "text-yellow-700",
    background: "bg-yellow-50",
  },
  azure: {
    border: "border-sky-500",
    text: "text-sky-600",
    background: "bg-sky-50",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

function EmptyState({ message, linkText, linkPath }) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6">
      <p className="text-sm leading-6 text-gray-600">{message}</p>

      {linkText && linkPath && (
        <Link
          to={linkPath}
          className="mt-4 inline-flex text-sm font-bold text-sky-600 hover:text-sky-700"
        >
          {linkText}{" "}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      )}
    </div>
  );
}

function Home() {
  return (
    <>
      <SEO
        title="Rupesh Lal Kumar | Entrepreneur & Business Builder"
        description="Explore the entrepreneurial journey, businesses, projects, and insights of Rupesh Lal Kumar, an entrepreneur and business builder focused on digital solutions, technology, and education."
        path="/"
      />

      <div className="overflow-hidden bg-white text-gray-900">
        {/* 1. HERO */}
        <section className="relative isolate border-b border-gray-100">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl"
          />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 sm:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:py-5">
            <div>
              <p className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
                Entrepreneurial journey · Business · Technology
              </p>

              <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>

              <p className="mt-5 text-xl font-semibold text-gray-700 sm:text-2xl">
                {profile.role}
              </p>

              <p className="mt-4 text-lg font-bold text-sky-600">
                {profile.tagline}
              </p>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                {profile.introduction}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/businesses"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  Explore Businesses
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-bold text-gray-800 transition hover:border-gray-500 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Brand statement */}
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-200/60 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                  My philosophy
                </p>

                <div className="mt-7 space-y-5">
                  {[
                    { word: "Think.", color: "text-orange-500" },
                    { word: "Build.", color: "text-green-600" },
                    { word: "Sell.", color: "text-yellow-600" },
                    { word: "Grow.", color: "text-sky-600" },
                  ].map((item, index) => (
                    <div
                      key={item.word}
                      className="flex items-center gap-4"
                    >
                      <span className="text-sm font-semibold text-gray-400">
                        0{index + 1}
                      </span>

                      <p
                        className={`text-3xl font-black tracking-tight sm:text-4xl ${item.color}`}
                      >
                        {item.word}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 h-px bg-gray-200" />

                <p className="mt-5 text-sm leading-6 text-gray-600">
                  Learning, creating practical solutions, serving customers,
                  and developing businesses one step at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BUSINESSES */}
        <section
          id="businesses"
          className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8"
        >
          <SectionHeading
            eyebrow="What I build"
            title="Businesses"
            description="Explore the businesses and initiatives I am developing across digital services, local online services, and education."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business) => {
              const accent =
                accentStyles[business.accent] || accentStyles.azure;

              return (
                <article
                  key={business.shortName}
                  className={`flex h-full flex-col rounded-2xl border border-gray-200 border-t-4 ${accent.border} bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-sm font-extrabold ${accent.background} ${accent.text}`}
                  >
                    {business.shortName}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-gray-950">
                    {business.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                    {business.description}
                  </p>

                  <Link
                    to={business.path}
                    className={`mt-6 inline-flex items-center text-sm font-bold ${accent.text} hover:underline`}
                  >
                    View Business
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              to="/businesses"
              className="text-sm font-bold text-gray-800 hover:text-sky-600"
            >
              Explore all businesses <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* 3. SELECTED PROJECTS */}
        <section className="border-y border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
            <SectionHeading
              eyebrow="Practical work"
              title="Selected Projects"
              description="A growing collection of projects, experiments, and solutions built through practical work."
            />

            {projects.length > 0 ? (
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.slice(0, 3).map((project) => (
                  <article
                    key={project.name}
                    className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-gray-950">
                        {project.name}
                      </h3>

                      {project.status && (
                        <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                      {project.description}
                    </p>

                    {project.business && (
                      <p className="mt-4 text-xs font-semibold text-gray-500">
                        {project.business}
                      </p>
                    )}

                    {project.technologies?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      to={project.path || "/projects"}
                      className="mt-6 text-sm font-bold text-sky-600 hover:text-sky-700"
                    >
                      View Project <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-10">
                <EmptyState
                  message="Project showcases will appear here as projects are added to the portfolio."
                  linkText="Explore the Projects page"
                  linkPath="/projects"
                />
              </div>
            )}

            <div className="mt-8">
              <Link
                to="/projects"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:border-sky-500 hover:text-sky-600"
              >
                View All Projects
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. ENTREPRENEURIAL JOURNEY */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="The process"
            title="My Entrepreneurial Journey"
            description="A continuous process of learning, building, working, and developing as a business builder."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((step, index) => (
              <article key={step.title} className="relative">
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-5">
                  <span className="text-sm font-bold text-sky-600">
                    STEP 0{index + 1}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-gray-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < journey.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-bold text-gray-400 lg:block"
                  >
                    →
                  </span>
                )}
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/journey"
              className="inline-flex items-center text-sm font-bold text-sky-600 hover:text-sky-700"
            >
              Explore My Journey
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* 5. CONTENT PREVIEW */}
        <section className="border-y border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
            <SectionHeading
              eyebrow="Ideas and learning"
              title="Content & Insights"
              description="Articles, videos, and insights will share lessons from entrepreneurship, software development, business building, and learning."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Latest Articles",
                  description:
                    "Written ideas, lessons, and practical explanations.",
                  items: content.articles,
                  type: "articles",
                },
                {
                  title: "Latest Videos",
                  description:
                    "Video content about entrepreneurship and technology.",
                  items: content.videos,
                  type: "videos",
                },
                {
                  title: "Latest Insights",
                  description:
                    "Short observations, experiments, and lessons learned.",
                  items: content.insights,
                  type: "insights",
                },
              ].map((group) => (
                <article
                  key={group.type}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="text-xl font-bold text-gray-950">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {group.description}
                  </p>

                  {group.items.length > 0 ? (
                    <ul className="mt-5 space-y-4">
                      {group.items.slice(0, 2).map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.path || "/content"}
                            className="font-semibold text-sky-600 hover:text-sky-700"
                          >
                            {item.title}
                          </Link>

                          {item.description && (
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                              {item.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-5 text-sm text-gray-500">
                      New content will be featured here.
                    </p>
                  )}

                  <Link
                    to="/content"
                    className="mt-6 inline-flex text-sm font-bold text-gray-800 hover:text-sky-600"
                  >
                    Explore Content
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CONTACT CTA */}
        <section className="px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gray-950 px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-400">
              Let's connect
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Have an idea, project, or business opportunity?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300">
              Let's discuss how we can turn a practical idea into meaningful
              work.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Contact Me
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
