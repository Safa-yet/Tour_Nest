import React from 'react';

const ExploreSec = () => {
    return (
         <section className="h-[80vh] relative flex items-center justify-center text-center px-6">
          <div className="absolute inset-0 opacity-20">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFSyvLfx3J56eQ_RuxH_GM2QyREVlFQithGh-bc_55_xly1a3Mm_nabqvtP6Gy02-Naz8XVJfmETQ6sC1O08fhZvZ9MGCYwjcfmXHNi5du30xx-NMa07ii8YXniM5y1wQpQ0spTT0M0-tAUwZ88ggl-i5FIHZst3I90_K9A7bboNr3R9DoT9CIbsiB5nHhWR0KP8eBc-KqlBjY-hi0wfwS2ZTMBYPi_8HN_k-RbbFKem9EHacmgbMbD-oT2L4GpLr9Cl9kSOjPCg" alt="River" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h2 className="font-serif text-6xl md:text-8xl leading-none mb-12">
              READY TO <br /> <span className="text-[#b1f661]">DISAPPEAR?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="px-12 py-6 bg-[#fea619] text-[#684000] font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
                Request Invitation
              </button>
              <button className="px-12 py-6 border-2 border-[#b1f661] text-[#b1f661] font-bold rounded-full hover:bg-[#b1f661] hover:text-black transition-all">
                Explore Catalog
              </button>
            </div>
          </div>
        </section>
    );
};

export default ExploreSec;