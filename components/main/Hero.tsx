import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute center-[-340px]  h-full w-full left-1 z-[1] object-cover"
      >
        <source src="/education-background1.mp4" type="video/webm" />
       
      </video>
      <HeroContent />



  
     
    </div>

    
  );
};

export default Hero;