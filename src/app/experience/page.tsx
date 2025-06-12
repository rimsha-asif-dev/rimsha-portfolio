'use client'
import React, { useEffect, useState } from 'react';

import SuccessAnimation from "@/app/animations/job.json";
import Lottie from "lottie-react";

export default function Experience() {
  // Updated experience data

  const experienceData = [
    {
      title: "Frontend Web Developer",
      company: "Bytevia Technologies",
      type: "Full-time",
      location: "Lahore, Punjab, Pakistan · Remote",
      period: "Dec 2024 to present · 8 mos",
      description: [
        "Designed user-friendly interfaces using ReactJs. Translated Figma designs into high-quality Next.js code. Utilized Tailwind CSS for responsive UI styling.",
        "Key Responsibilities:",
        "- Integrated REST APIs, GraphQL APIs, and Firebase across multiple projects. Implemented React Query for efficient data retrieval and caching.",
        "- Created reusable components with ShadCN/UI and Material UI.",
        "- Integrated third-party services like Stripe, AWS S3, and Google.",
        "- Used map services like Mapbox, Google, and Leaflet to customize map location pointers."
      ],
      skills: ["React.js", "Next.js", "Tailwind CSS", "REST API", "GraphQL", "Firebase", "React Query", "ShadCN/UI", "Material UI", "Stripe", "AWS S3", "Google", "Mapbox", "Leaflet"]
    },
    {
      title: "Frontend Web Developer",
      company: "Chirp Technologies",
      type: "Full-time",
      location: "Lahore, Punjab, Pakistan · On-site",
      period: "Mar 2024 to Nov 2024 · 9 mos",
      description: [
        "Designed user-friendly interfaces using ReactJs. Translated Figma designs into high-quality Next.js code. Utilized Tailwind CSS for responsive UI styling.",
        "Key Responsibilities:",
        "- Integrated REST APIs, GraphQL APIs, and Firebase across multiple projects. Implemented React Query for efficient data retrieval and caching.",
        "- Created reusable components with ShadCN/UI and Material UI.",
        "- Integrated third-party services like Stripe, AWS S3, and Google.",
        "- Used map services like Mapbox, Google, and Leaflet to customize map location pointers."
      ],
      skills: ["React.js", "Next.js", "Tailwind CSS", "REST API", "GraphQL", "Firebase", "React Query", "ShadCN/UI", "Material UI", "Stripe", "AWS S3", "Google", "Mapbox", "Leaflet"]
    },
    {
      title: "Jr. Mern Stack Developer",
      company: "AppsGenii Technologies",
      type: "Full-time",
      location: "Lahore, Punjab, Pakistan · On-site",
      period: "Aug 2023 to Feb 2024 · 7 mos",
      description: [
        "Responsible for designing user-friendly interfaces using React JS.",
        "Used libraries like Material UI and Bootstrap for attractive interfaces.",
        "Created CRUD-based forms and integrated with REST APIs.",
        "Worked on TailEase admin panel using Next.js for better routing and operational maintenance.",
        "Integrated with REST APIs and map services."
      ],
      skills: ["Node.js", "React.js", "Material UI", "Bootstrap", "Next.js", "REST API"]
    },
    {
      title: "Intern",
      company: "AppsGenii Technologies",
      type: "Internship",
      location: "Lahore, Punjab, Pakistan · On-site",
      period: "Jan 2023 to Jul 2023 · 7 mos",
      description: [
        "Worked as an intern focusing on JavaScript and React.js.",
        "Assisted in developing and maintaining web applications."
      ],
      skills: ["JavaScript", "React.js"]
    }
  ];

  // Animation state for cards and heading
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {

    setTimeout(() => setShowHeading(true), 200); // Heading animates in first
    experienceData.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, idx]);
      }, 400 + idx * 200); // Cards animate after heading
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-8 py-8 md:py-12 relative z-10">
        <h1 className={`text-2xl sm:text-3xl md:text-4xl flex flex-col gap-4 justify-center items-center font-bold text-gray-800 mb-6 md:mb-10 text-center transition-all duration-700 ease-out ${showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Work Experience 👩‍💻
          <div className="bg-[#212033] w-fit rounded-sm p-2">
            <Lottie
              animationData={SuccessAnimation}
              loop={true}
              style={{ height: "150px" }}
            />
          </div>
        </h1>
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg inset-shadow-sm inset-shadow-indigo-500 shadow-blue-500/50 border border-blue-100 flex flex-col gap-2 transition-all duration-700 ease-out ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1">
                {exp.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <span className="text-base sm:text-lg text-gray-600">
                  {exp.company}{" "}
                  <span className="text-xs text-gray-400">({exp.type})</span>
                </span>
                <span className="text-blue-600 font-medium text-xs sm:text-sm">
                  {exp.period}
                </span>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mb-1">{exp.location}</div>
              <ul className="list-disc list-inside space-y-1 mb-1 pl-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 text-xs sm:text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills &&
                  exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 