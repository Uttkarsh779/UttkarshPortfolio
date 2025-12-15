import { motion } from "framer-motion";

// PROLOAD
import proploadMain from "../assets/Projects/propload/main.png";
import proploadDash from "../assets/Projects/propload/dashboard.png";
import proploadBid from "../assets/Projects/propload/bidding.png";

// // UTFLEX
import utflexHome from "../assets/Projects/utflex/home.png";
import utflexDetails from "../assets/Projects/utflex/details.png";

// // CARPOOL
import carpoolHome from "../assets/Projects/carpool/home.png";
import carpoolDetails from "../assets/Projects/carpool/details.png";

// // WEATHER
import weatherHome from "../assets/Projects/weather/home.png";

/* ---------- STACKED IMAGE COMPONENT ---------- */
const ProjectImageStack = ({ images, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="relative block h-[300px] w-full group"
    >
      {/* BACK IMAGE */}
      {images[2] && (
        <img
          src={images[2]}
          alt="project preview"
          className="
            absolute top-12 left-12
            h-[240px] w-full
            rounded-xl object-cover
            shadow-md
            rotate-[-6deg]
            scale-[0.9]
            z-0
            transition-all duration-500
            group-hover:translate-x-4 group-hover:-translate-y-4
          "
        />
      )}

      {/* MIDDLE IMAGE */}
      {images[1] && (
        <img
          src={images[1]}
          alt="project preview"
          className="
            absolute top-6 left-6
            h-[260px] w-full
            rounded-xl object-cover
            shadow-lg
            rotate-[-3deg]
            scale-[0.95]
            z-10
            transition-all duration-500
            group-hover:translate-x-2 group-hover:-translate-y-2
          "
        />
      )}

      {/* FRONT IMAGE */}
      {images[0] && (
        <img
          src={images[0]}
          alt="project preview"
          className="
            absolute top-0 left-0
            h-[280px] w-full
            rounded-xl object-cover
            shadow-xl
            rotate-[1deg]
            z-20
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      )}

      {/* HOVER OVERLAY */}
      <div
        className="
          absolute inset-0 z-30
          flex items-center justify-center
          rounded-xl
          bg-black/60
          opacity-0
          transition
          group-hover:opacity-100
        "
      >
        <span className="border-2 border-white px-6 py-2 text-sm font-semibold tracking-widest text-white">
          VIEW PROJECT
        </span>
      </div>
    </a>
  );
};



/* ---------- TECH BADGE ---------- */
const TechBadge = ({ text }) => (
  <span className="rounded-full border border-black/30 px-4 py-1 text-xs tracking-wide">
    {text}
  </span>
);

/* ---------- PROJECTS ---------- */
const Projects = () => {
  return (

    <motion.section
      id="projects"
      className="bg-[#d7d7d7] pt-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <div className="mb-24 flex justify-center">
        <span className="border-[5px]  border-black px-12 py-4 text-2xl font-bold tracking-widest">
          PROJECTS
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-10 space-y-32">

        {/* PROLOAD */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl text-center font-bold tracking-widest ">
              Propload
              <span className="border-1 border-black px-4 py-1 text-xs font-semibold">
                Internship Project
              </span>
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              July 2025 – Present · Nandighosh Roadx Motors Pvt Ltd
            </p>

            <p className="mt-6 text-base text-gray-700 leading-relaxed">
              A production-level e-bidding platform for construction tenders with
              secure bidding, vendor management, and scalable workflows.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TechBadge text="React" />
              <TechBadge text="Node.js" />
              <TechBadge text="Express" />
              <TechBadge text="Database" />
            </div>

            <a
              href="https://propload.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 border-2 border-black px-8 py-3 text-sm font-semibold tracking-widest hover:bg-black hover:text-white transition"
            >
              VISIT WEBSITE
            </a>
          </div>

          <ProjectImageStack
            link="https://propload.com"
            images={[proploadMain, proploadDash, proploadBid]}
          />
        </div>

        {/* UTFLEX */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ProjectImageStack
            link="https://movie-app-react-delta-ten.vercel.app/"
            images={[utflexHome, utflexDetails]}
          />

          <div>
            <h3 className="text-3xl font-bold tracking-widest">UTFlex</h3>

            <p className="mt-3 text-sm text-gray-500">
              April 2025 – July 2025
            </p>

            <p className="mt-6 text-base text-gray-700 leading-relaxed">
              A movie & TV series discovery platform with ratings, trending
              content, and recommendations using real-time API data.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TechBadge text="React" />
              <TechBadge text="Node.js" />
              <TechBadge text="Express" />
              <TechBadge text="TMDb API" />
            </div>
          </div>
        </div>

        {/* CARPOOL */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-widest">
              Carpooling & Ride Sharing System
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              February 2025 – April 2025
            </p>

            <p className="mt-6 text-base text-gray-700 leading-relaxed">
              A ride sharing platform that allows users to offer and book rides,
              reducing travel cost and improving efficiency.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TechBadge text="EJS" />
              <TechBadge text="Node.js" />
              <TechBadge text="Express" />
              <TechBadge text="MySQL" />
            </div>
          </div>

          <ProjectImageStack
            link="https://github.com/Uttkarsh779/carpooling-system"
            images={[carpoolHome, carpoolDetails]}
          />
        </div>

        {/* WEATHER */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ProjectImageStack
            link="https://github.com/Uttkarsh779/weather-predictor"
            images={[weatherHome]}
          />

          <div>
            <h3 className="text-3xl font-bold tracking-widest">
              Weather Predictor
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              October 2024 – November 2024
            </p>

            <p className="mt-6 text-base text-gray-700 leading-relaxed">
              A web application that analyzes historical weather data to detect
              potential natural disasters and generate alert messages.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <TechBadge text="HTML" />
              <TechBadge text="CSS" />
              <TechBadge text="JavaScript" />
              <TechBadge text="Node.js" />
              <TechBadge text="MongoDB" />
            </div>
          </div>
        </div>

      </div>
      <div className="mt-20 flex justify-center">
        <span className="h-[1px] w-20 bg-black"></span>
      </div>
    </motion.section>
  );
};

export default Projects;
