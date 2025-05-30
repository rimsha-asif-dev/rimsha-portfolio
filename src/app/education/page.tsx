"use client"
import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';

export default function Education() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const awardRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const backgroundImages = [
    
   
    '/pic4.jpg',
    '/pic5.jpg',
   
    
    '/pic8.jpg',
    '/pic9.jpg',
   
    
  ];

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Confetti triggered!');
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 8500); // Show confetti for 8.5 seconds
        }
      },
      { threshold: 0.3 }
    );
    if (awardRef.current) {
      observer.observe(awardRef.current);
    }
    return () => {
      if (awardRef.current) observer.unobserve(awardRef.current);
    };
  }, []);

  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      school: "University of Punjab",
      year: "2018 - 2022",
      description: "Completed Bachelor's in Computer Science, focusing on both theoretical and practical aspects of computing. Focused on software development, algorithms, and data structures.",
      logo: "/pu.png"
    },
    {
      degree: "Intermediate in Computer Science(ICS)",
      school: "Government Graduate College For Girls Baghbanpura Lahore",
      year: "2016 - 2018",
      description: "Completed Intermediate in Computer Science (ICS) with a strong focus on structured programming using C++, database systems, and computer fundamentals. Developed essential problem-solving and logical reasoning skills. This experience sparked my interest in software development and set a strong foundation for my future academic and professional pursuits in the tech industry.",
      logo: "/college.jpg"
    },
    {
      degree: "Matriculation ",
      school: "Govt. Girls High School Baghbanpura Lahore",
      year: "2014 - 2016",
      description: "Completed Matriculation in Science with a focus on Mathematics, Physics, and Computer Science. Developed strong analytical and problem-solving skills along with a keen interest in computers. This early exposure to computer fundamentals motivated me to pursue Intermediate studies in Computer Science and eventually a career in the tech field.",
      logo: "/school.jpg"
    }
  ];

  return (
    <>
      {showConfetti && windowSize.width > 0 && windowSize.height > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={500}
          recycle={false}
          gravity={0.5}
          initialVelocityY={20}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000, pointerEvents: 'none' }}
        />
      )}
      <div className="flex flex-col min-h-screen bg-[#212033] relative">
        {/* Background Slideshow (fixed to always cover viewport) */}
        <div className="fixed inset-0 w-full h-full z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-70' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-12 pt-20 flex-1">
          <div className={`transform transition-all   duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">Education</h1>
            <p className="text-white font-medium text-center mb-8 transition-all duration-1000 delay-300">
              Here&apos;s All about my qualifications, academic background and certifications 🎓
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className={`bg-white/95 inset-shadow-sm inset-shadow-indigo-500 backdrop-blur-sm p-6 rounded-lg shadow-xl transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-3">
                  <img src={edu.logo} alt={edu.school + ' logo'} className="w-10 h-10 rounded-full object-cover border border-gray-300 bg-white" />
                  {edu.degree}
                </h2>
                <h3 className="text-lg text-gray-600 mb-2">{edu.school}</h3>
                <p className="text-blue-600 font-medium mb-4">{edu.year}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certification Section */}
          <div className="mt-20">
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-3xl font-bold text-white text-center drop-shadow-lg mb-8">Certifications</h1>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: 'Computer Science Exhibition Participant',
                  issuer: 'University of Punjab',
                  year: '2021',
                  description: 'Participated in the annual Computer Science Exhibition, showcasing innovative software projects and collaborating with peers on technology demonstrations.',
                  logo: '/pu.png',
                },
                {
                  title: 'Student of the Year',
                  issuer: 'Readers Academy',
                  year: '2018',
                  description: 'Awarded Student of the Year in recognition of outstanding academic progress and excellence throughout the year.',
                  logo: '/academy.png',
                },
               
              ].map((cert, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-all duration-1000 delay-200 hover:scale-[1.02]">
                  <div className="flex-shrink-0 flex items-center justify-center bg-gray-100 p-4 sm:p-6">
                    <img src={cert.logo} alt={cert.issuer + ' logo'} className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded" />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-center">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{cert.title}</h2>
                    <h3 className="text-sm sm:text-md text-gray-600 mb-1">{cert.issuer}</h3>
                    <p className="text-blue-600 font-medium mb-2">{cert.year}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Award Image Section */}
          <div ref={awardRef} className="mt-20 flex flex-col items-center px-2 sm:px-0 relative">
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg text-center">Award Showcase</h2>
            <img src="/award.jpeg" alt="Student of the Year Award" className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-lg shadow-2xl border-4 border-white object-contain" />
            <p className="text-white mt-4 text-center text-base sm:text-lg">Student of the Year - Readers Academy</p>
          </div>
        </div>
      </div>
    </>
  );
} 