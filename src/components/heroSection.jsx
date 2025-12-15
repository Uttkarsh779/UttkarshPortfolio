import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import myPicture from "../assets/myPicture.png";
import Header from "./header";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#d7d7d7]"
    >
      {/* ================= DESKTOP (UNCHANGED) ================= */}
      <div className="absolute top-0 right-0 hidden h-full w-[55%] bg-black clip-diagonal md:block"></div>

      {/* ================= MOBILE BACKGROUNDS ================= */}
      {/* Top black background */}
      <div className="absolute inset-0 bg-black md:hidden"></div>

      {/* Bottom light diagonal */}
      <div className="absolute bottom-0 left-0 z-30 h-[38%] w-full bg-[#d7d7d7]/80 clip-mobile-bottom md:hidden"></div>

      <Header />

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 grid min-h-screen grid-cols-1 md:grid-cols-2 px-6 md:px-12">

        {/* LEFT TEXT (DESKTOP ONLY) */}
        <div className="hidden flex-col justify-center md:flex">
          <p className="mb-4 text-lg font-medium text-gray-700">
            Hi, I am
          </p>

          <h1 className="mb-4 text-5xl font-extrabold text-black">
            Uttkarsh Tiwari
          </h1>

          <p className="mb-8 text-gray-600">
            Full Stack Developer
          </p>

          <div className="ml-16 mt-12 flex gap-4">
            <Socials />
          </div>
        </div>

        {/* IMAGE (DESKTOP + MOBILE) */}
        <div className="flex items-center justify-center md:items-end">
          <img
            src={myPicture}
            alt="Profile"
            className="h-[90vh] md:h-[95vh] object-contain"
          />
        </div>

        {/* MOBILE TEXT (BOTTOM PANEL) */}
        {/* MOBILE BOTTOM LIGHT PANEL + TEXT */}
        <div className="absolute bottom-0 left-0 z-30 h-[38%] w-full md:hidden clip-mobile-bottom bg-[#404040]/40 backdrop-blur-[2px]">

          <div className="absolute bottom-10 left-6 right-6">
            <p className="text-sm font-medium text-white ">
              Hi, I am
            </p>

            <h1 className="mt-1 text-3xl font-extrabold text-white">
              Uttkarsh Tiwari
            </h1>

            <p className="mt-2 text-sm text-white">
              Full Stack Developer
            </p>
          </div>

        </div>



        {/* MOBILE SOCIAL ICONS */}
        <div className="absolute right-4 bottom-[45%] z-30 flex flex-col gap-4 md:hidden">
          <Socials mobile />
        </div>

      </div>
    </section>
  );
};

const Socials = ({ mobile }) => (
  <>
    <a
      href="mailto:bt23cs039@nitmz.ac.in"
      className={`flex h-10 w-10 items-center justify-center rounded-md transition ${mobile
        ? "bg-white text-black"
        : "bg-gray-400 text-black hover:bg-black hover:text-white"
        }`}
    >
      <HiOutlineMail />
    </a>

    <a
      href="https://github.com/Uttkarsh779"
      target="_blank"
      rel="noreferrer"
      className={`flex h-10 w-10 items-center justify-center rounded-md transition ${mobile
        ? "bg-white text-black"
        : "bg-gray-400 text-black hover:bg-black hover:text-white"
        }`}
    >
      <FaGithub />
    </a>

    <a
      href="https://linkedin.com/in/uttkarsh-tiwari-60922a285"
      target="_blank"
      rel="noreferrer"
      className={`flex h-10 w-10 items-center justify-center rounded-md transition ${mobile
        ? "bg-white text-black"
        : "bg-gray-400 text-black hover:bg-black hover:text-white"
        }`}
    >
      <FaLinkedinIn />
    </a>
  </>
);

export default Hero;
