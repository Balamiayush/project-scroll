import LocomotiveScroll from "locomotive-scroll";
import React, { useState } from "react";

const Rightheading = () => {

  const [count] = useState(20);
  
  return (
    <div
      className="min-h-screen w-[8%]  bg-white   hidden fixed right-0 z-[100] lg:flex flex-col items-center justify-center "
      data-scroll
      data-scroll-speed="20"
      data-scroll-position="center"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col bg-white  items-center font-[StabilGrotesk-Regular] text-[5rem] tracking-tight"
        >
          <span className="tilted-text">GraphicHunters</span>
          <span>@</span>
        </div>
      ))}
    </div>
  );
};

export default Rightheading;
