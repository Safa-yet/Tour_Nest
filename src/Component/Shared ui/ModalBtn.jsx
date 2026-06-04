"use client";
import { Button } from "@heroui/react";
import { useRef } from "react";

const ModalBtn = () => {
    const buttonRef = useRef(null);
    
      const handleMouseMove = (e) => {
        const button = buttonRef.current;
    
        const rect = button.getBoundingClientRect();
    
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
    
        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      };
    
      const handleMouseLeave = () => {
        const button = buttonRef.current;
    
        button.style.transform = "translate(0px, 0px)";
      };
    return (
         <Button
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="
              absolute top-8 right-8   w-[50px] h-[50px] rounded-full   z-50
                px-8 py-4
                rounded-full
                bg-[#65A30D]
               
                font-bold
                tracking-wider
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                hover:scale-110
                active:scale-95
              "
            >
              Edit
            </Button>
    );
};

export default ModalBtn;