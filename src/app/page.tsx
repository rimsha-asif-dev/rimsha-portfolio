"use client";
import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAws,
  FaFigma,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiReactquery,
  SiFirebase,
  SiApollographql,
  SiBootstrap,
  SiMui,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaHandPointDown } from "react-icons/fa";
const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} color="#ff5722" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} color="#2196f3" /> },
  { name: "JavaScript", icon: <FaJs size={40} color="#f7df1e" /> },
  { name: "React JS", icon: <FaReact size={40} color="#61dafb" /> },
  { name: "Next JS", icon: <RiNextjsFill size={40} color="#212033" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38bdf8" /> },
  { name: "Material UI", icon: <SiMui size={40} color="#007fff" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={40} color="#7952b3" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178c6" /> },
  { name: "AWS", icon: <FaAws size={40} color="#ff9900" /> },
  { name: "React Query", icon: <SiReactquery size={40} color="#ff4154" /> },
  {
    name: "API Integration",
    icon: <SiApollographql size={40} color="#00b8d9" />,
  },
  { name: "Git", icon: <FaGithub size={40} color="#212033" /> },
  { name: "Firebase", icon: <SiFirebase size={40} color="#ffcb2b" /> },
  { name: "Figma", icon: <FaFigma size={40} color="#f24e1e" /> },
];

function StatsBar({ showStats }: { showStats: boolean }) {
  return (
    <div className="w-full flex justify-center mb-4 px-2">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl justify-center">
        {/* Left Card */}
        <div
          className={`flex flex-col items-center  rounded-lg py-6 px-6 transition-all duration-700 ${
            showStats
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}
        >
          <span className="text-4xl font-extrabold text-[#212033]">2.5</span>
          <span className="text-base text-[#212033] mt-1">
            Years of Experience
          </span>
        </div>
        {/* Center Card */}
        <div
          className={`flex flex-col items-center  rounded-lg py-6 px-6 transition-all duration-700 delay-150 ${
            showStats
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-16"
          }`}
        >
          <span className="text-4xl font-extrabold text-[#212033]">5</span>
          <span className="text-base text-[#212033] mt-1">
            Projects Completed
          </span>
        </div>
        {/* Right Card */}
        <div
          className={`flex flex-col items-center  rounded-lg py-6 px-6 transition-all duration-700 delay-300 ${
            showStats ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          }`}
        >
          <span className="text-4xl font-extrabold text-[#212033]">15</span>
          <span className="text-base text-[#212033] mt-1">
            Technologies Used
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowStats(true), 200);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-2">
      {/* Stats Bar - Desktop (above card) */}
      <div className="hidden md:flex w-full">
        <StatsBar showStats={showStats} />
      </div>
      {/* Profile Card */}
      <div className="flex flex-col md:flex-row items-center inset-shadow-sm inset-shadow-indigo-500  shadow-blue-500/50 bg-white rounded-xl shadow-lg p-6 md:p-12 max-w-3xl w-full mt-2  mb-8">
        {/* Profile image with dark circle behind */}
        <div className="relative min-w-[140px] md:min-w-[180px] flex-shrink-0 mb-6 md:mb-0">
          <div className="absolute left-0 top-0 w-32 h-32 md:w-44 md:h-44 rounded-full bg-gray-800 -translate-x-4 shadow-blue-500/50 shadow-md md:-translate-x-8 translate-y-2 md:translate-y-4 z-0" />
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gray-200 shadow-blue-500/50 shadow-md bg-gray-100 relative z-10">
            <img
              src="/pfp.jpeg"
              alt="Profile"
              className="object-cover w-full h-full "
            />
          </div>
        </div>
        {/* Text content */}
        <div className="md:ml-12 flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight flex items-center justify-center md:justify-start gap-2">
            Hi,
            <span
              role="img"
              aria-label="wave"
              className={`inline-block animate-wave-once`}
            >
              👋
            </span>
            I am Rimsha Asif
          </h1>
          <div className="mx-auto w-24 md:mx-0  md:w-[95%] border-b-2 border-dotted border-gray-400 mb-4" />
          <p className="text-base md:text-lg text-gray-700 mb-2">
            Web Developer specializing in accessibility and modern UI/UX design.
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Welcome to my portfolio. I am a skilled developer with expertise in
            modern web technologies. My focus is on creating efficient,
            scalable, and user-friendly applications that solve real-world
            problems.
          </p>
          <div className="flex flex-row items-center gap-3 mt-2 justify-center md:justify-start">
            <a
              href="/Rimsha Asif.pdf"
              download="Rimsha_Asif.pdf"
              className="bg-green-400 hover:bg-[#212033] cursor-pointer text-white px-4 py-1 rounded-full flex items-center justify-center"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/rimsha-asif-093786264/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:scale-110 transition-transform"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/rimshaasif20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#212033] hover:scale-110 transition-transform"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
      {/* Stats Bar - Mobile (below card) */}
      <div className="flex md:hidden w-full">
        <StatsBar showStats={showStats} />
      </div>
      {/* Skills Section */}
      <div className="w-full max-w-5xl px-1 pb-10">
        <h2 className="text-xl flex items-center justify-center gap-2 md:text-2xl font-bold text-[#212033] mb-6 md:mb-8 text-center">
          Tools & Technologies <FaHandPointDown size={25} color="#FFC23D" /> I
          know?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name || idx}
              className="flex flex-col items-center justify-center bg-white border inset-shadow-sm inset-shadow-indigo-500  shadow-blue-500/50 border-green-400 rounded-lg p-3 md:p-6 shadow-md transition-transform hover:scale-105"
            >
              {skill.icon}
              <span className="mt-2 md:mt-4 text-[#212033] text-xs md:text-base font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
    </div>
  );
}
