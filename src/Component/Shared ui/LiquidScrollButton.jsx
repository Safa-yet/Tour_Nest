"use client";

import { useEffect, useState } from "react";

const LiquidScrollButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={scrollToTop}
        className="
          fixed
          bottom-8
          right-8
          z-[999]
          w-10
          h-10
          rounded-full
          border-4
          border-[#84cc16]
          overflow-hidden
          bg-black/70
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(132,204,22,0.35)]
          group
        "
      >
        {/* Water Fill */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            bg-gradient-to-t
            from-[#3f6212]
            via-[#65a30d]
            to-[#bef264]
            transition-all
            duration-300
          "
          style={{
            height: `${scrollProgress}%`,
          }}
        >
          {/* Wave */}
          <div className="wave absolute top-[-20px] left-0 w-[200%] h-10 bg-white/20 rounded-[40%]" />
        </div>

        {/* Arrow */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-white
            text-2xl
            font-bold
            z-10
            transition-transform
            duration-300
            group-hover:scale-125
          "
        >
          ↑
        </div>
      </button>

      
    </>
  );
};

export default LiquidScrollButton;