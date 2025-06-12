"use client";
import Lottie from "lottie-react";
import animationData from "@/app/animations/loading.json";
import React from "react";


export default function PageTransitionLottie({ onComplete }: { onComplete: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

 
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white w-full h-full">
     
      <Lottie
        animationData={animationData}
        loop={false}
        style={{
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          maxHeight: '100vh',
          objectFit: 'cover',
          zIndex: 2,
          position: "relative"
        }}
      />
    </div>
  );
}