"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import PageTransitionLottie from "./PageTransitionLottie";
import Animation from "./ParticlesBag";

export default function TransitionLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [showChildren, setShowChildren] = useState(true);

  useEffect(() => {
    setLoading(true);
    setShowChildren(false);
    const timer = setTimeout(() => {
      setLoading(false);
      setShowChildren(true);
    }, 2000); // Match the Lottie duration
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
        <Animation /> 
      {showChildren && children}
    </>
  );
} 