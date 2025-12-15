import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HeroImage from "../assets/logoPortfolio.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* HEADER */}
      <nav className="absolute top-5 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-24">
        {/* Logo */}
        <div className="w-20">
          <img src={HeroImage} alt="logo" className="w-full" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9 font-semibold text-[#d7d7d7]">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About Me</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-black hover:text-white transition"
          >
            CONTACT ME
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black text-white">
          <div className="flex justify-between items-center px-6 py-6">
            <img src={HeroImage} alt="logo" className="w-16" />
            <button onClick={() => setOpen(false)} className="text-xl">
              <FaTimes />
            </button>
          </div>

          <div className="mt-20 flex flex-col items-center gap-10 text-lg tracking-widest">
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About Me</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("projects")}>Portfolio</button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-white px-8 py-3 mt-6"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
