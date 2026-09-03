import main from "../assets/main.png";
import { Link } from "react-router-dom";

const BRAND_COLORS = {
  orange: "#FB8D2E",
  azure: "#04ABED",
  green: "#3AA540",
  yellow: "#FCCA0A",
  black: "#000000",
  white: "#FFFFFF",
};

const stats = [
  {
    value: "1+",
    label: "Years Experience",
    color: BRAND_COLORS.orange,
    icon: "▣",
  },
  {
    value: "10+",
    label: "Projects",
    color: BRAND_COLORS.azure,
    icon: "◆",
  },
  {
    value: "100%",
    label: "Commitment",
    color: BRAND_COLORS.green,
    icon: "♡",
  },
];

const specialties = [
  {
    name: "Web Development",
    color: BRAND_COLORS.orange,
    icon: "◎",
  },
  {
    name: "Software",
    color: BRAND_COLORS.azure,
    icon: "▣",
  },
  {
    name: "UI/UX Design",
    color: BRAND_COLORS.green,
    icon: "✎",
  },
  {
    name: "Digital Solutions",
    color: BRAND_COLORS.yellow,
    icon: "✦",
  },
];

const Home = () => {
  return (
    <main
      id="main-content"
      className="
        min-h-screen
        overflow-hidden
        bg-white
        text-gray-900
        pt-20
      "
    >
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="home"
        aria-labelledby="hero-title"
        className="
          relative
          isolate
          overflow-hidden
          scroll-mt-20
        "
      >
        {/* =================================================
            LIGHTWEIGHT BACKGROUND ATMOSPHERE
        ================================================== */}

        {/* Orange glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-40
            top-24
            -z-20
            h-[380px]
            w-[380px]
            rounded-full
            opacity-[0.06]
            blur-[80px]
          "
          style={{
            backgroundColor: BRAND_COLORS.orange,
          }}
        />

        {/* Azure glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            top-40
            -z-20
            h-[460px]
            w-[460px]
            rounded-full
            opacity-[0.08]
            blur-[90px]
          "
          style={{
            backgroundColor: BRAND_COLORS.azure,
          }}
        />

        {/* Green glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-40
            right-[20%]
            -z-20
            h-[320px]
            w-[320px]
            rounded-full
            opacity-[0.045]
            blur-[80px]
          "
          style={{
            backgroundColor: BRAND_COLORS.green,
          }}
        />

        {/* =================================================
            SUBTLE GRID
        ================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            opacity-[0.018]
          "
          style={{
            backgroundImage: `
              linear-gradient(#000 1px, transparent 1px),
              linear-gradient(90deg, #000 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* =================================================
            MAIN HERO CONTAINER
        ================================================== */}
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            pb-10
            pt-8
            sm:px-8
            lg:px-10
            lg:pb-12
            lg:pt-12
          "
        >
          <div
            className="
              grid
              min-h-[calc(100vh-80px)]
              items-center
              gap-12
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-8
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <div className="relative z-20 max-w-2xl">

              {/* Availability */}
              <div
                className="
                  mb-7
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  bg-white/90
                  px-4
                  py-2
                  shadow-sm
                  backdrop-blur-sm
                  transition-transform
                  duration-200
                  hover:-translate-y-0.5
                  motion-reduce:transition-none
                "
                style={{
                  borderColor: `${BRAND_COLORS.green}55`,
                }}
                role="status"
              >
                {/* Lightweight status dot */}
                <span
                  aria-hidden="true"
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                  "
                  style={{
                    backgroundColor: BRAND_COLORS.green,
                  }}
                />

                <span className="text-sm font-semibold text-gray-800">
                  Available for Projects
                </span>

                <span
                  className="ml-1 text-sm"
                  style={{
                    color: BRAND_COLORS.green,
                  }}
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              {/* Hello */}
              <p
                className="
                  mb-4
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.32em]
                  sm:text-sm
                "
                style={{
                  color: BRAND_COLORS.azure,
                }}
              >
                Hello, I'm
              </p>

              {/* Main Heading */}
              <h1
                id="hero-title"
                className="
                  text-[3.6rem]
                  font-black
                  leading-[0.92]
                  tracking-[-0.055em]
                  sm:text-7xl
                  lg:text-[5.8rem]
                  xl:text-[6.3rem]
                "
              >
                <span className="block text-gray-950">
                  Rupesh Lal
                </span>

                <span
                  className="mt-1 block"
                  style={{
                    color: BRAND_COLORS.orange,
                  }}
                >
                  Kumar.
                </span>
              </h1>

              {/* Role */}
              <h2
                className="
                  mt-7
                  text-2xl
                  font-extrabold
                  tracking-tight
                  sm:text-3xl
                "
              >
                <span
                  style={{
                    color: BRAND_COLORS.orange,
                  }}
                >
                  Entrepreneur
                </span>

                <span className="text-gray-900"> & </span>

                <span
                  style={{
                    color: BRAND_COLORS.azure,
                  }}
                >
                  Developer
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-8
                  text-gray-600
                  sm:text-lg
                "
              >
                I build modern websites, software and digital experiences
                that help businesses stand out, connect with customers and{" "}
                <span
                  className="font-bold"
                  style={{
                    color: BRAND_COLORS.green,
                  }}
                >
                  grow.
                </span>{" "}
                <span aria-hidden="true">🚀</span>
              </p>

              {/* =================================================
                  CTA
              ================================================== */}
              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                {/* Primary */}
                <Link
                  to="/projects"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    transition-transform
                    duration-200
                    hover:-translate-y-1
                    hover:shadow-xl
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                    motion-reduce:transition-none
                  "
                  style={{
                    backgroundColor: BRAND_COLORS.azure,
                  }}
                >
                  <span>View My Work</span>

                  <span
                    aria-hidden="true"
                    className="
                      text-lg
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                      motion-reduce:transition-none
                    "
                  >
                    →
                  </span>
                </Link>

                {/* Secondary */}
                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    border-2
                    bg-white/80
                    px-7
                    py-4
                    text-sm
                    font-bold
                    backdrop-blur-sm
                    transition-transform
                    duration-200
                    hover:-translate-y-1
                    hover:bg-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                    motion-reduce:transition-none
                  "
                  style={{
                    borderColor: BRAND_COLORS.orange,
                    color: BRAND_COLORS.black,
                  }}
                >
                  <span>Let's Work Together</span>

                  <span
                    aria-hidden="true"
                    className="
                      text-lg
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                      motion-reduce:transition-none
                    "
                    style={{
                      color: BRAND_COLORS.orange,
                    }}
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* =================================================
                  STATS
              ================================================== */}
              <div
                className="
                  mt-10
                  grid
                  max-w-2xl
                  grid-cols-3
                  rounded-3xl
                  border
                  border-gray-100
                  bg-white/90
                  p-5
                  shadow-[0_15px_45px_rgba(15,23,42,0.06)]
                  backdrop-blur-sm
                  sm:mt-12
                  sm:p-6
                "
                aria-label="Professional statistics"
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`
                      flex
                      items-center
                      gap-3
                      px-3
                      ${index !== 0 ? "border-l border-gray-200" : ""}
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className="
                        hidden
                        text-2xl
                        font-black
                        sm:block
                      "
                      style={{
                        color: stat.color,
                      }}
                    >
                      {stat.icon}
                    </span>

                    <div>
                      <p
                        className="
                          text-2xl
                          font-black
                          sm:text-3xl
                        "
                        style={{
                          color: stat.color,
                        }}
                      >
                        {stat.value}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          font-semibold
                          text-gray-500
                          sm:text-xs
                        "
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================== */}
            <div
              className="
                relative
                flex
                min-h-[540px]
                items-center
                justify-center
                lg:min-h-[650px]
              "
              aria-label="Rupesh Lal Kumar profile"
            >
              {/* Main circle */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  h-[350px]
                  w-[350px]
                  rounded-full
                  border
                  bg-gradient-to-br
                  from-orange-50
                  via-white
                  to-blue-50
                  sm:h-[470px]
                  sm:w-[470px]
                  lg:h-[540px]
                  lg:w-[540px]
                "
                style={{
                  borderColor: `${BRAND_COLORS.azure}30`,
                  boxShadow: `0 0 70px ${BRAND_COLORS.azure}18`,
                }}
              />

              {/* Yellow ring */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-2
                  top-[5%]
                  h-32
                  w-32
                  rounded-full
                  border-[7px]
                  opacity-90
                  sm:right-0
                  lg:right-4
                "
                style={{
                  borderColor: BRAND_COLORS.yellow,
                }}
              />

              {/* Azure ring */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-[10%]
                  left-[2%]
                  h-24
                  w-24
                  rounded-full
                  border-[5px]
                  opacity-70
                  sm:left-[5%]
                "
                style={{
                  borderColor: BRAND_COLORS.azure,
                }}
              />

              {/* =================================================
                  ORANGE / AZURE DOT PATTERN
              ================================================== */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[7%]
                  top-[25%]
                  grid
                  grid-cols-4
                  gap-2
                  opacity-70
                "
              >
                {Array.from({ length: 16 }, (_, index) => (
                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? BRAND_COLORS.orange
                          : BRAND_COLORS.azure,
                    }}
                  />
                ))}
              </div>

              {/* Green dots */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-[25%]
                  right-[3%]
                  grid
                  grid-cols-4
                  gap-2
                  opacity-60
                "
              >
                {Array.from({ length: 12 }, (_, index) => (
                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: BRAND_COLORS.green,
                    }}
                  />
                ))}
              </div>

              {/* Orange atmosphere */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-[15%]
                  left-[4%]
                  h-28
                  w-28
                  rounded-full
                  opacity-15
                  blur-xl
                "
                style={{
                  backgroundColor: BRAND_COLORS.orange,
                }}
              />

              {/* =================================================
                  PROFILE PHOTO
              ================================================== */}
              <div className="relative z-10 mt-6">

                {/* Image glow */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-12
                    rounded-full
                    opacity-15
                    blur-2xl
                  "
                  style={{
                    backgroundColor: BRAND_COLORS.azure,
                  }}
                />

                {/* Image container */}
                <div
                  className="
                    relative
                    h-[470px]
                    w-[360px]
                    overflow-hidden
                    rounded-[3rem]
                    sm:h-[570px]
                    sm:w-[430px]
                    lg:h-[610px]
                    lg:w-[455px]
                  "
                >
                  <img
                    src={main}
                    alt="Rupesh Lal Kumar"
                    width="455"
                    height="610"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                    "
                  />

                  {/* Bottom gradient */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-24
                      bg-gradient-to-t
                      from-white/20
                      to-transparent
                    "
                  />
                </div>

                {/* =================================================
                    TECHNOLOGY BADGE
                ================================================== */}
                <div
                  className="
                    absolute
                    -left-5
                    top-[25%]
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    text-xl
                    shadow-lg
                    sm:-left-8
                  "
                  style={{
                    color: BRAND_COLORS.azure,
                    border: `1px solid ${BRAND_COLORS.azure}30`,
                  }}
                  aria-hidden="true"
                >
                  &lt;/&gt;
                </div>

                {/* Growth badge */}
                <div
                  className="
                    absolute
                    -right-5
                    top-[45%]
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    text-xl
                    shadow-lg
                    sm:-right-8
                  "
                  style={{
                    color: BRAND_COLORS.green,
                    border: `1px solid ${BRAND_COLORS.green}30`,
                  }}
                  aria-hidden="true"
                >
                  ↗
                </div>

                {/* =================================================
                    STATUS CARD
                ================================================== */}
                <div
                  className="
                    absolute
                    -bottom-5
                    right-[-15px]
                    rounded-2xl
                    border
                    border-white
                    bg-white/95
                    px-4
                    py-3
                    shadow-[0_15px_40px_rgba(15,23,42,0.12)]
                    backdrop-blur-sm
                    sm:-right-10
                    sm:px-5
                    sm:py-4
                  "
                >
                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        text-lg
                        font-black
                        text-white
                      "
                      style={{
                        backgroundColor: BRAND_COLORS.green,
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </div>

                    <div>
                      <p className="text-[11px] font-medium text-gray-500">
                        Currently
                      </p>

                      <p className="text-sm font-bold text-gray-900">
                        Building & Learning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              SPECIALIZED IN
          ====================================================== */}
          <div
            className="
              mt-2
              flex
              flex-col
              gap-5
              rounded-3xl
              border
              border-gray-100
              bg-white/90
              px-5
              py-5
              shadow-[0_15px_45px_rgba(15,23,42,0.05)]
              backdrop-blur-sm
              lg:flex-row
              lg:items-center
              lg:px-7
            "
          >
            <p className="shrink-0 text-sm font-bold text-gray-900">
              Specialized In:
            </p>

            <div
              className="
                grid
                flex-1
                grid-cols-2
                gap-3
                md:grid-cols-4
              "
            >
              {specialties.map((item) => (
                <div
                  key={item.name}
                  className="
                    group
                    flex
                    items-center
                    gap-2.5
                    rounded-full
                    border
                    border-gray-100
                    bg-white
                    px-4
                    py-2.5
                    transition-transform
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                    motion-reduce:transition-none
                  "
                >
                  <span
                    aria-hidden="true"
                    className="text-lg"
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </span>

                  <span
                    className="
                      text-xs
                      font-semibold
                      text-gray-700
                      sm:text-sm
                    "
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;