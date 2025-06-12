"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import SuccessAnimation from "@/app/animations/laptop.json";

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Animate cards in sequence
    projectsData.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, idx]);
      }, 200 + idx * 150);
    });
  }, []);

  const projectsData = [
    {
      title: "Vet your pep",
      description: `Vet Your Pep is a dynamic social networking platform built for individuals interested in health, wellness, peptides, and lifestyle optimization. It provides a space for users to connect, share, and learn within focused community groups.

Key Features:
• Verified user profiles with follower support
• Public feed for sharing educational and research-based posts
• Discover and join group channels (e.g., Fitness, Diabetes, Skin & Hair, etc.)
• Participate in real-time group chat within each channel
• Like and comment on posts to drive engagement
• Smart search for filtering posts and channels
• Clean, modern UI with responsive design`,
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Sendbird",
        "PostgreSQL",
        "GraphQL",
        "React Query",
      ],
      image: "/vetpep.svg",
      link: "https://www.vetyourpep.com/",
    },
    {
      title: "Skyviews Caribbean Maps",
      description: `Skyviews Caribbean Maps is an interactive travel platform designed to help users discover and plan their perfect Caribbean island experience. The app serves two main roles:

• For Travellers: Effortlessly explore Caribbean islands, get personalized recommendations, and find hidden gems, events, and bespoke itineraries tailored to your interests. Save your favorite destinations, plan trips, and access up-to-date travel tips and must-see attractions.

• For Business Owners: Register and advertise your hotels, restaurants, tours, or attractions directly on Skyviews. Reach thousands of potential visitors, showcase your offerings with rich media, and manage your business profile to attract more travellers.

Key Features:
• Interactive island map with clickable destinations and detailed info
• Personalized recommendations and smart filters
• User accounts for both travellers and business owners
• Clean, modern, and responsive UI/UX
• Up-to-date travel and event information for each island`,
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Mapbox",
        "PostgreSQL",
        "GraphQL",
        "React Query",
      ],
      image: "/loogo.png", // <-- Replace with your actual image path
      link: "https://sky-views-dev.vercel.app/",
    },
    {
      title: "Simply Ortho Academy",
      description: `Simply Ortho Academy is a comprehensive online platform for dental professionals, especially orthodontists, to enhance their knowledge and skills. The platform offers a wide range of learning resources, a professional marketplace, and a collaborative network for the dental community.

Key Features:
• Learning Hub: Access orthodontics training courses, webinars, workshops, and congresses—all in one place. Enjoy free and premium lessons with video content and detailed resources.
• Marketplace: Buy and sell dental products, tools, and materials directly within the platform, connecting dental professionals and suppliers.
• Article Creation: Create, publish, and share articles or case studies to contribute to the dental community and build your professional profile.
• Professional Network: Connect with other dentists, join discussions, and expand your professional network.
• Modern UI/UX: Clean, responsive design for seamless learning and networking experiences.
• User Accounts: Register as a learner, educator, or vendor to access personalized features and manage your content.`,
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Sendbird",
        "PostgreSQL",
        "GraphQL",
        "React Query"
      ],
      image: "/simply.svg", // Replace with your actual image path
     
    },
    {
      title: "B&B Event Smart",
      description: `B&B Event Smart is a modern event management platform designed specifically for salons and beauty professionals. The app makes it easy to create, promote, and manage salon events, workshops, and special offers, connecting beauty experts with clients and enthusiasts.

Key Features:
• Event Creation: Effortlessly create and customize salon events, workshops, and beauty sessions.
• Event Discovery: Browse and explore upcoming salon events, special offers, and beauty workshops in your area.
• Ticketing & Registration: Securely manage event tickets and attendee registrations directly through the app.
• Organizer Tools: Salon owners and beauty professionals can track attendees, manage bookings, and communicate with participants.
• User Accounts: Sign up as a client or organizer to access personalized features and event recommendations.
• Mobile Access: Available on both Google Play and the App Store for convenient event management on the go.
• Social Integration: Share events and connect with the beauty community via Instagram and Facebook.`,
technologies: [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "GraphQL",
  "React Query"
],
      image: "/bnb_logo3.svg", // Replace with your actual image path
      
    },
    {
      title: "iGotPlans",
      description: `iGotPlans is a user-friendly event management web application that allows users to discover, browse, and purchase tickets for events in their area. The platform is designed to make event planning and participation seamless for both attendees and organizers.
    
    Key Features:
    • Event Discovery: Browse recommended and trending events tailored to your interests and location.
    • Ticket Purchasing: Securely buy tickets for events directly through the platform.
    • Personal Dashboard: View your attended and favorite events, manage tickets, and keep track of your event calendar.
    • Organizer Tools: Event organizers can list new events, manage ticket sales, and reach a wider audience.
    • Search & Filters: Easily search for events and use filters to find exactly what you're looking for.
    • Wallet Integration: Manage your event payments and transactions within the app.
    • Modern UI/UX: Clean, responsive, and intuitive interface for a smooth user experience.`,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase"
      ],
      image: "/logo-light.png", // Replace with your actual image path
     
    },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-8 py-8 md:py-12">
      <div className="flex  items-center justify-center  ">
      <h1 className="text-5xl sm:text-3xl md:text-6xl font-bold text-gray-900 mb-6 md:mb-10 text-center">
        Projects
      </h1>
      <Lottie
              animationData={SuccessAnimation}
              loop={true}
              style={{ height: "150px" }}
            />
      </div>
    
      <div className="flex flex-col gap-6 md:gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`bg-[#27324b] inset-shadow-sm inset-shadow-indigo-500 shadow-green-200 border border-green-100 rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-all duration-700 ease-out transform hover:scale-105 hover:z-10
              ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="p-4 sm:p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full shadow-lg">
                  <Image
                    src={project.image}
                    alt="Projects Logo"
                    width={60}
                    height={60}
                    className="object-contain rounded-full"
                  />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h2>
              </div>
              <p className="text-white mb-4 text-xs sm:text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-200 font-medium mt-auto"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
