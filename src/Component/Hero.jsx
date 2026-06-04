"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div>
             <section className="relative h-screen w-full overflow-hidden flex items-end pb-20">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover grayscale-[0.3] contrast-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1IGpyuXOcp6OSzJa5N30ogsbsGcH6DN--RmuomJHrDOAz1lcwINSMA0EEzA99gEYOEAld9wqjUUs5dmo-e8JwwulrDTWZgCCojVeuQEXNdin0n3sVIJvdKhQLZ1D6DlowS_qkDyvL4HWpj4Gq8Ymm-hFwYX5oTygazrPUeMM9zd_Ol07JUdvYnCW_hKJZ-UpC_7Uxa2wywl3GChMlvoe-8S5R_kD4hEa_d0J8-4ktK4ME31dg0wRhMNqubM-WVVfnaG0FYtpWKA" 
              alt="Mist Forest" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1108] via-transparent to-transparent opacity-90"></div>
          </div>
          
          <div className="relative z-10 px-8 md:px-16 w-full">
            <span className="text-[#ffddb8] tracking-[0.4em] uppercase text-xs block mb-4">The Untamed World Awaits</span>
            <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-serif leading-[0.85] text-[#b1f661] mb-10">
              EMBRACE <br /> 
            
              <span className="italic text-white pl-12 md:pl-32 text-8xl">  <TypeAnimation
  sequence={[
    'THE WILD',
    500,
    '', //  Continuing previous Text
    500,
    'THE UNKNOWN',
    500,
    'THE UNTAMED',
    500,
    'THE UNEXPLORED',
    500,
    '',
    500,
  ]}
  repeat={Infinity}
/></span>
            </h1>
            <div className="flex flex-wrap items-center gap-8">
              <button  className="px-10 py-5 bg-[#fea619] text-[#684000] font-bold rounded-full flex items-center gap-3 hover:translate-x-2 transition-transform">
                Start Journey 
              </button>
              <p className="text-sm text-[#c2cab2] max-w-xs border-l border-[#b1f661]/40 pl-6">
                Curated experiences for those who live without boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Marquee Transition */}
        <div className="bg-[#0d1108] py-10 overflow-hidden whitespace-nowrap border-y border-[#c2cab2]/10">

            <Marquee className="flex gap-10 opacity-10 font-serif text-6xl md:text-8xl italic uppercase">
            <span style={{ WebkitTextStroke: '1px #b1f661', color: 'transparent' }}>Unparalleled Exploration Beyond</span>
            <span style={{ WebkitTextStroke: '1px #b1f661', color: 'transparent' }}>Explore the World</span>
   
  </Marquee>
        </div>
        </div>
    );
};

export default Hero;