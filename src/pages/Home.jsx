import Profile from "../assets/Profile.jpg";
import { Link } from "react-router-dom";

const BRAND_COLORS = {
  orange: "#fb8d2e",
  green: "#3aa540",
  yellow: "#fcca0a",
  azure: "#04abed",
};

const stats = [
  {
    value: "1+",
    label: "Years Exprience",
    color: BRAND_COLORS.orange,
  },
  {
    value: "10+",
    label: "Projects",
    color: BRAND_COLORS.green,
  },
  {
    value: "100%",
    label: "Commitment",
    color: BRAND_COLORS.azure,
  },
];

const services = [
  {
    name: "Web Development",
    color: BRAND_COLORS.orange,
  },
  {
    name: "Software",
    color: BRAND_COLORS.green,
  },
  {
    name: "Business",
    color: BRAND_COLORS.yellow,
  },
  {
    name: "Digital Growth",
    color: BRAND_COLORS.azure,
  },
];

const Home = () => {
  return (
    <main
      id="main-content"
      className="min-h-screen overflow-hidden bg-white pt-20"
    >
      {/* =========================
          HERO SECTION
      ========================== */}
      <section
        id="home"
        aria-labelledby="hero-title"
        className="relative isolate"
      >
        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: BRAND_COLORS.orange }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-40 -z-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: BRAND_COLORS.azure }}
        />

        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:px-8">
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="max-w-2xl">
            {/* Availability */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm"
              role="status"
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: BRAND_COLORS.green }}
              />

              <span className="text-sm font-semibold text-gray-700">
                Available for Projects
              </span>
            </div>

            {/* Introduction */}
            <p
              className="mb-4 text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND_COLORS.azure }}
            >
              Hello, I'm
            </p>

            {/* Main Heading */}
            <h1
              id="hero-title"
              className="text-5xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              Rupesh Lal
              <span className="block" style={{ color: BRAND_COLORS.orange }}>
                Kumar
              </span>
            </h1>

            {/* Professional Role */}
            <h2 className="mt-6 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl">
              Software{" "}
              <span style={{ color: BRAND_COLORS.green }}>Entrepreneur</span> &
              Developer
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              I build modern websites and software solutions that help
              businesses establish a strong digital presence, attract customers,
              and grow online.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04abed] focus-visible:ring-offset-2 motion-reduce:transition-none"
                style={{ backgroundColor: BRAND_COLORS.azure }}
              >
                View My Work
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-6 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb8d2e] focus-visible:ring-offset-2 motion-reduce:transition-none"
                style={{
                  borderColor: BRAND_COLORS.orange,
                  color: BRAND_COLORS.orange,
                }}
              >
                Let's Work Together
              </Link>
            </div>

            {/* Stats */}
            <div
              className="mt-12 grid grid-cols-3 border-t border-gray-100 pt-8"
              aria-label="Professional statistics"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-black sm:text-3xl"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}
          <div
            className="relative flex items-center justify-center lg:justify-end"
            aria-hidden="true"
          >
            {/* Decorative Circle */}
            <div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-8 opacity-80 sm:-right-12 sm:-top-12 sm:h-28 sm:w-28"
              style={{ borderColor: BRAND_COLORS.yellow }}
            />

            {/* Decorative Square */}
            <div
              className="absolute -bottom-8 -left-6 h-20 w-20 rotate-12 rounded-2xl opacity-20 sm:-left-12 sm:h-24 sm:w-24"
              style={{ backgroundColor: BRAND_COLORS.green }}
            />

            {/* Main Brand Card */}
            <div className="relative flex h-[380px] w-[300px] items-center justify-center rounded-[2rem] bg-gray-50 shadow-2xl sm:h-[470px] sm:w-[380px]">
              {/* Color Frame */}
              <div
                className="absolute inset-4 rounded-[1.5rem] border-4"
                style={{ borderColor: BRAND_COLORS.azure }}
              />

              {/* Card Content */}
              <div className="relative z-10 text-center">
                {/* RLK Logo */}
                {/* <div
                  className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl text-3xl font-black text-white shadow-xl sm:h-32 sm:w-32 sm:text-4xl"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${BRAND_COLORS.orange} 0%,
                      ${BRAND_COLORS.orange} 40%,
                      ${BRAND_COLORS.azure} 40%,
                      ${BRAND_COLORS.azure} 70%,
                      ${BRAND_COLORS.green} 70%
                    )`,
                  }}
                >
                  RLK
                </div> */}
                <img
                  src={Profile}
                  alt="RLK Logo"
                  className="mx-auto flex h-28 w-28 items-center justify-center rounded-full object-cover shadow-xl sm:h-38 sm:w-38"
                  style={{ border: "4px solid #04abed" }}
                />

                {/* Brand Message */}
                <p className="mt-8 text-2xl font-black text-gray-900">
                  Build.
                  <span style={{ color: BRAND_COLORS.orange }}> Learn.</span>
                </p>

                <p className="text-2xl font-black text-gray-900">
                  <span style={{ color: BRAND_COLORS.green }}>Create.</span>{" "}
                  Grow.
                </p>

                {/* Brand Colors */}
                <div className="mt-8 flex justify-center gap-3">
                  <span
                    className="h-3 w-10 rounded-full"
                    style={{ backgroundColor: BRAND_COLORS.orange }}
                  />

                  <span
                    className="h-3 w-10 rounded-full"
                    style={{ backgroundColor: BRAND_COLORS.green }}
                  />

                  <span
                    className="h-3 w-10 rounded-full"
                    style={{ backgroundColor: BRAND_COLORS.yellow }}
                  />

                  <span
                    className="h-3 w-10 rounded-full"
                    style={{ backgroundColor: BRAND_COLORS.azure }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Status Card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-8 sm:px-5 sm:py-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{ backgroundColor: BRAND_COLORS.green }}
                >
                  ✓
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-500">Currently</p>

                  <p className="text-sm font-bold text-gray-900">
                    Building & Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES / BRAND STRIP
      ========================== */}
      <section
        aria-label="Areas of expertise"
        className="border-y border-gray-100 bg-gray-50"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-8 sm:grid-cols-4 lg:px-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-center gap-3 border-gray-200 py-3 sm:border-r last:border-r-0"
            >
              <span
                aria-hidden="true"
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: service.color }}
              />

              <span className="text-sm font-bold text-gray-700">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
