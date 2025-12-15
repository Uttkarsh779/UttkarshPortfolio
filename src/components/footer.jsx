import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#111] py-20 text-center text-white">

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="mx-auto mb-10 flex flex-col items-center gap-2 text-xs tracking-widest hover:opacity-70 transition"
      >
        <IoIosArrowUp className="text-xl" />
        BACK TO TOP
      </button>

      {/* Social Icons */}
      <div className="mb-10 flex justify-center gap-6 text-lg">
        <a
          href="https://github.com/Uttkarsh779"
          target="_blank"
          rel="noreferrer"
          className="border border-white p-2 hover:bg-white hover:text-black transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/uttkarsh-tiwari-60922a285"
          target="_blank"
          rel="noreferrer"
          className="border border-white p-2 hover:bg-white hover:text-black transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://instagram.com/Uttkarsh_779"
          target="_blank"
          rel="noreferrer"
          className="border border-white p-2 hover:bg-white hover:text-black transition"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:bt23cs039@nitmz.ac.in"
          className="border border-white p-2 hover:bg-white hover:text-black transition"
        >
          <HiOutlineMail />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs tracking-widest text-white/70">
        © {new Date().getFullYear()} Uttkarsh Tiwari. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;
