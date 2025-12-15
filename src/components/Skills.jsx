import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#d7d7d7] pt-24">

      {/* Title */}
      <div className="mb-16 flex justify-center">
        <span className="inline-block border-[5px] border-black px-10 py-3 text-xl font-bold tracking-widest">
          SKILLS
        </span>
      </div>

      {/* Content Wrapper */}
      <div className="mx-auto max-w-3xl px-10">

        {/* USING NOW */}
        <h3 className="text-left mb-10 text-xl font-semibold tracking-widest">
          USING NOW:
        </h3>

        <div className=" mb-20 grid grid-cols-2 gap-10 sm:grid-cols-4 text-gray-900">
          <Skill icon={<FaHtml5 />} label="HTML5" color="#E34F26" />
          <Skill icon={<FaCss3Alt />} label="CSS3" color="#1572B6" />
          <Skill icon={<SiJavascript />} label="JavaScript" color="#F7DF1E" />
          <Skill icon={<FaReact />} label="React" color="#61DAFB" />
          <Skill icon={<FaNodeJs />} label="Node.js" color="#339933" />
          <Skill icon={<SiExpress />} label="Express.js" color="#000000" />
          <Skill icon={<FaGitAlt />} label="Git" color="#F05032" />
          <Skill icon={<SiMysql />} label="MySQL" color="#4479A1" />
        </div>

        {/* LEARNING */}
        <h3 className="text-left mb-10 text-xl font-semibold tracking-widest">
          LEARNING:
        </h3>

        <div className="mb-20 grid grid-cols-2 gap-10 sm:grid-cols-4">
          <Skill icon={<SiMongodb />} label="MongoDB" color="#47A248" />
          <Skill icon={<SiTypescript />} label="TypeScript" color="#3178C6" />
          <Skill icon={<AiOutlineRobot />} label="Gen AI" color="#6B7280" />
          <Skill icon={<FaPython />} label="Python" color="#3776AB" />
        </div>

        {/* OTHER SKILLS */}
        <h3 className="text-left mb-10 text-xl font-semibold tracking-widest">
          OTHER SKILLS:
        </h3>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 text-sm">
          <Skill icon={<SiC />} label="C" color="#A8B9CC" />
          <Skill icon={<SiCplusplus />} label="C++" color="#00599C" />
          <Skill label="DSA" color="#959393ff" />
          <Skill label="Problem Solving" />
        </div>

      </div>
      <div className="mt-20 flex justify-center">
        <span className="h-[1px] w-20 bg-black"></span>
      </div>
    </section>

  );
};

const Skill = ({ icon, label, color }) => {
  return (
    <div className="group flex flex-col items-center gap-3 transition hover:-translate-y-1">
      {icon && (
        <span
          className="text-4xl transition duration-300 group-hover:scale-110"
          style={{
            color: color,
            // filter: "grayscale(100%)",
          }}
        >
          {icon}
        </span>
      )}
      <span className="text-xs tracking-widest text-gray-600">
        {label}
      </span>

      {/* Hover restores color */}
      <style>
        {`
          .group:hover span {
            filter: none;
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
