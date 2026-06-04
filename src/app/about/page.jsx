"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const CinematicHorizon = () => {
  const [mounted, setMounted] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    setPosition({
      x: clientX,
      y: clientY,
    });
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#f7fbeb] text-[#191d13] overflow-x-hidden">
      <main className="relative">
        {/* Hero Section */}
        <header
          onMouseMove={handleMouseMove}
          className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Background Image */}
          <Image
            width={800}
            height={600}
            src="https://images.pexels.com/photos/15576694/pexels-photo-15576694.jpeg"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="text-[80px] md:text-[140px] leading-none text-white font-black tracking-tighter uppercase italic">
              Beyond <br />
              <span className="text-lime-500">Horizon</span>
            </h1>
          </div>

          {/* Floating Buttons */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Adventure */}
            <button
              style={{
                transform: `translate(${position.x * 0.05}px, ${
                  position.y * 0.05
                }px)`,
              }}
              className="
                pointer-events-auto
                absolute
                top-[20%]
                left-[10%]
                backdrop-blur-xl
                bg-white/10
                border
                border-white/20
                w-24
                h-24
                rounded-full
                text-white
                text-sm
                font-bold
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-125
                hover:bg-lime-500
                hover:text-black
                hover:-translate-y-5
                shadow-2xl
              "
            >
              ADVENTURE
            </button>

            {/* All Trips */}
            <button
              style={{
                transform: `translate(${position.x * -0.05}px, ${
                  position.y * 0.05
                }px)`,
              }}
              className="
                pointer-events-auto
                absolute
                top-[60%]
                left-[5%]
                backdrop-blur-xl
                bg-lime-500/20
                border
                border-white/20
                w-32
                h-32
                rounded-full
                text-white
                text-sm
                font-bold
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-125
                hover:bg-lime-500
                hover:text-black
                hover:-translate-y-5
                shadow-2xl
              "
            >
              ALL TRIPS
            </button>

            {/* Luxury */}
            <button
              style={{
                transform: `translate(${position.x * 0.05}px, ${
                  position.y * -0.05
                }px)`,
              }}
              className="
                pointer-events-auto
                absolute
                top-[15%]
                right-[15%]
                backdrop-blur-xl
                bg-white/10
                border
                border-white/20
                w-20
                h-20
                rounded-full
                text-white
                text-xs
                font-bold
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-125
                hover:bg-lime-500
                hover:text-black
                hover:-translate-y-5
                shadow-2xl
              "
            >
              LUXURY
            </button>

            {/* Nature */}
            <button
              style={{
                transform: `translate(${position.x * -0.05}px, ${
                  position.y * -0.05
                }px)`,
              }}
              className="
                pointer-events-auto
                absolute
                top-[70%]
                right-[10%]
                backdrop-blur-xl
                bg-white/10
                border
                border-white/20
                w-28
                h-28
                rounded-full
                text-white
                text-sm
                font-bold
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-125
                hover:bg-lime-500
                hover:text-black
                hover:-translate-y-5
                shadow-2xl
              "
            >
              NATURE
            </button>

            {/* Culture */}
            <button
              style={{
                transform: `translate(${position.x * 0.05}px, ${
                  position.y * -0.05
                }px)`,
              }}
              className="
                pointer-events-auto
                absolute
                bottom-[10%]
                left-[40%]
                backdrop-blur-xl
                bg-white/10
                border
                border-white/20
                w-24
                h-24
                rounded-full
                text-white
                text-sm
                font-bold
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-125
                hover:bg-lime-500
                hover:text-black
                hover:-translate-y-5
                shadow-2xl
              "
            >
              CULTURE
            </button>
          </div>
        </header>
      </main>
    </div>
  );
};

export default CinematicHorizon;