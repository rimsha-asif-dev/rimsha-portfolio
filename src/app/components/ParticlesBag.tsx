'use client';
import React from 'react';
import Particles from "@tsparticles/react";

export default function ParticlesBg() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "#f8fafc" } },
        fpsLimit: 120,
        particles: {
          color: { value: "#4f46e5" },
          links: {
            color: "#4f46e5",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          number: { value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: 3 },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
