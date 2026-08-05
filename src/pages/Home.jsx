import React from "react";
import Hero from "../assets/Hero.png";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#071b2f] text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block bg-blue-700 px-4 py-2 rounded tracking-[4px] text-sm font-semibold">
              RLK DEVELOPER
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold mt-8 leading-tight">
              HAY! I'M Rupesh
            </h1>

            <h2 className="text-4xl lg:text-6xl font-bold text-blue-500 mt-6">
              I'M A FULL STACK DEVELOPER
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-gray-300 mt-8 max-w-xl leading-8 text-lg">
              Passionate Frontend Developer and UX/UI Designer specializing in React,
              JavaScript, Figma,  and modern web technologies. I build
              responsive, scalable and user-friendly web applications.
            </p>

            <div className="flex items-center gap-6 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3">
                GET IN TOUCH
                <FaArrowRight />
              </button>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-blue-600 duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-pink-500 duration-300"
                >
                  <FaDribbble />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-blue-500 duration-300"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center">

            {/* Background Lines */}
            <div className="absolute w-[450px] h-[450px] rounded-full border border-gray-500 opacity-30"></div>

            <div className="absolute w-[500px] h-[500px] rounded-full border border-gray-600 opacity-20"></div>

            {/* Decorative Balls */}

            <div className="absolute top-14 left-8 w-16 h-16 rounded-full bg-gradient-to-r from-slate-800 to-cyan-900 blur-[1px]"></div>

            <div className="absolute bottom-16 right-8 w-20 h-20 rounded-full bg-gradient-to-r from-slate-800 to-cyan-900 blur-[1px]"></div>

            {/* Hero Image */}

            <img
              src={Hero}
              alt="Hero"
              className="relative z-10 w-[420px] lg:w-[500px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;