import React from 'react'
import { FiPenTool, FiCode, FiSettings } from "react-icons/fi";
const AboutMe = () => {
  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section id='about' className="bg-[#d7d7d7] pt-24 text-center">

      {/* Title */}
      <div className="mb-10">
        <span className="inline-block border-[5px] border-solid border-black px-10 py-3 text-xl font-bold tracking-widest">
          ABOUT ME
        </span>
      </div>

      {/* Description */}
      <p className="mx-auto mb-10 max-w-3xl text-[18px] leading-relaxed text-gray-600">
        I am a passionate Computer Science undergraduate at the National Institute
        of Technology, Mizoram, with a strong interest in full stack web development.
        I enjoy building scalable, real-world applications and continuously
        strengthening my foundation in programming, problem-solving, and software
        engineering.
      </p>

      {/* Explore */}
      <button onClick={() => scrollTo("contact")} className="mb-16 text-sm tracking-widest text-black hover:text-gray-700">
        |&nbsp;&nbsp;EXPLORE&nbsp;&nbsp;|
      </button>

      {/* Services */}


      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">

        {/* DESIGN */}
        <div className=" relative rounded-md p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-black/5 shadow-sm hover:shadow-md">

          {/* Icon */}
          <span className="absolute -top-4 -left-4 text-5xl text-black/10 transition-all duration-300 group-hover:scale-110 group-hover:text-black/20">
            <FiPenTool />
          </span>

          <h3 className=" mb-5 text-xl font-bold tracking-widest">
            DESIGN
          </h3>

          <p className="text-md leading-relaxed text-gray-600">
            I focus on creating clean, intuitive, and user-friendly interfaces,
            translating ideas into visually appealing designs.
          </p>
        </div>

        {/* DEVELOPMENT */}
        <div className="group relative rounded-md p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-black/5 shadow-sm hover:shadow-md">

          <span className="absolute -top-4 -left-4 text-5xl text-black/10 transition-all duration-300 group-hover:scale-110 group-hover:text-black/20">
            <FiCode />
          </span>

          <h3 className="mb-3 text-xl font-bold tracking-widest">
            DEVELOPMENT
          </h3>

          <p className="text-md leading-relaxed text-gray-600">
            I develop full stack web applications using modern technologies,
            ensuring performance, scalability, and clean architecture.
          </p>
        </div>

        {/* MAINTENANCE — CENTERED */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <div className="group relative max-w-md rounded-md p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-black/5 shadow-sm hover:shadow-md">

            <span className="absolute -top-4 -left-4 text-5xl text-black/10 transition-all duration-300 group-hover:scale-110 group-hover:text-black/20">
              <FiSettings />
            </span>

            <h3 className="mb-3 text-xl font-bold tracking-widest">
              MAINTENANCE
            </h3>

            <p className="text-md leading-relaxed text-gray-600">
              I provide ongoing support, updates, and optimizations to keep
              applications reliable and efficient.
            </p>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-20 flex justify-center">
        <span className="h-[1px] w-20 bg-black"></span>
      </div>

    </section>
  );
};

export default AboutMe;


