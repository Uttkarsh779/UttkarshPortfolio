import React from 'react'

const Cta = () => {
  return (
    <>
      <section className="w-full bg-[#1d1d1d] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold tracking-widest mb-6 text-primary">
              FULL-STACK DEVELOPMENT
            </h2>

            <p className="text-muted leading-relaxed mb-4">
              I specialize in building end-to-end web applications that combine
              modern user interfaces with powerful back-end systems.
            </p>

            <p className="text-muted leading-relaxed mb-6">
              From responsive front-end development using React and Tailwind CSS
              to building APIs, managing databases, and deploying applications,
              I deliver complete full-stack solutions.
            </p>

            {/* <p className="text-sm mb-8 text-muted">
              <span className="text-primary font-medium">Tech Stack:</span> React,
              Tailwind CSS, Node.js, Express, MongoDB / PostgreSQL
            </p> */}

            <button className="border border-primary text-primary px-6 py-2 text-sm tracking-widest hover:bg-primary hover:text-black transition">
              READ MORE
            </button>
          </div>

          {/* Right Visual */}
          <div className="md:w-1/3 flex justify-center text-white">
            <span className="text-[140px] font-bold text-primary/10 select-none">
              FS
            </span>
          </div>

        </div>
      </section></>


  )
}

export default Cta