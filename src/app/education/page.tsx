import React from 'react';

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      school: "University Name",
      year: "2018 - 2022",
      description: "Focused on software development, algorithms, and data structures. Participated in various coding competitions and hackathons."
    },
    {
      degree: "Master's Degree in Software Engineering",
      school: "University Name",
      year: "2022 - 2024",
      description: "Specialized in advanced software development methodologies, cloud computing, and distributed systems."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 pt-20">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Education</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{edu.degree}</h2>
            <h3 className="text-lg text-gray-600 mb-2">{edu.school}</h3>
            <p className="text-blue-600 font-medium mb-4">{edu.year}</p>
            <p className="text-gray-600">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 