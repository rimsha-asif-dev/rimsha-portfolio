import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/project1.jpg",
      link: "https://github.com/username/project1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "/project2.jpg",
      link: "https://github.com/username/project2"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Tailwind CSS",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/project3.jpg",
      link: "https://github.com/username/project3"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 