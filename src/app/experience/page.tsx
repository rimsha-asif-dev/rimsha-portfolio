import React from 'react';

export default function Experience() {
  const experienceData = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: [
        "Led development of enterprise-level applications using React and Node.js",
        "Implemented CI/CD pipelines and improved deployment processes",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Software Developer",
      company: "Startup Company",
      period: "2020 - 2022",
      description: [
        "Developed and maintained web applications using modern JavaScript frameworks",
        "Collaborated with cross-functional teams to deliver features",
        "Optimized application performance and reduced load times"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Work Experience</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        {experienceData.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h2>
            <h3 className="text-lg text-gray-600 mb-2">{exp.company}</h3>
            <p className="text-blue-600 font-medium mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 