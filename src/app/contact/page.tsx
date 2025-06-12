"use client"
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/app/animations/hire.json'; // or your preferred animation
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
    const redirectToEmailClient = ( recipientEmail: string) => {
      debugger
        
       
        
        // Construct the mailto URL with the recipient email, subject, and optional body
        const mailtoURL = `mailto:${recipientEmail}`;
        
        // Redirect to the mailto URL
        window.location.href = mailtoURL;
      };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white items-center justify-center px-4 md:px-8 lg:px-20 py-8 gap-6">
      {/* Left: Contact Info */}
      <div className="flex-1 flex flex-col justify-end items-center text-[#212033] w-[70%]">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact me</h1>
        <p className="mb-8 text-lg md:text-xl text-gray-700 max-w-2xl">
          If you're looking for a passionate and skilled software engineer to drive your next project or join your team. Let's build something great together! Whether you're launching a new project, scaling your team, or looking for a fresh perspective — I’m ready to bring technical excellence and creativity to the table
          Reach out and let’s connect!.
        </p>
        <div
     onClick={() => redirectToEmailClient("rimshaasif873@gmail.com")}
  className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold px-8 py-4 rounded-full mb-4 transition"
>
  Reach me via Email
</div>

        
        <span className="text-gray-700  font-bold text-lg md:text-xl">Or</span>
        <div className="flex gap-4 justify-center items-center mt-2">
          {/* Social icons here */}
          <a href="https://www.linkedin.com/in/rimsha-asif-093786264/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:scale-110 transition-transform">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/rimshaasif20" target="_blank" rel="noopener noreferrer" className="text-[#212033] hover:scale-110 transition-transform">
              <FaGithub size={28} />
            </a>
          {/* Add more icons as needed */}
        </div>
      </div>
      {/* Right: Lottie Animation */}
     
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: '100%', maxWidth: 450, height: 'auto' }}
        />
     
    </div>
  );
}
