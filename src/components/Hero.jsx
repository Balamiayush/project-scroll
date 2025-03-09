import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "./Images";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = [
    {
      id: 1,
      src: "https://gh22.codebydennis.com/media/pages/home/2cca201a59-1728463366/01-1920x-q72.jpg",
    },
    {
      id: 2,
      src: "https://gh22.codebydennis.com/media/pages/home/1cc83cd4be-1728463366/08-1920x-q72.jpg",
    },
    {
      id: 3,
      src: "https://gh22.codebydennis.com/media/pages/home/4539e25d6b-1728463366/02-1920x-q72.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const imgRefs = useRef([]);
  const heroTextRef = useRef(null); // Ref for text animation

  // 🌀 GSAP Animation for Text on Scroll
  useGSAP(() => {
    gsap.to(".heading2", {
      x: "10%", // Moves right instead of leaving the screen
      duration: 1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false, // ✅ Remove after debugging
      },
    });
    gsap.to(".hero h1,a", {
      opacity:0.1,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false, // ✅ Remove after debugging
      },
    });
  });

  // 🖼️ Image Transition Effect
  useEffect(() => {
    const interval = setInterval(() => {
      transitionToNextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const transitionToNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length; // Calculate next index

    if (!imgRefs.current[currentIndex] || !imgRefs.current[nextIndex]) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(nextIndex);
      },
    });

    // Fade out current image
    tl.to(imgRefs.current[currentIndex], {
      duration: 1,
      opacity: 0,
      scale: 1.1,
      ease: "power2.out",
    });

    // Fade in next image
    tl.fromTo(
      imgRefs.current[nextIndex],
      { opacity: 0.8, scale: 1.05 },
      { duration: 1, opacity: 1, scale: 1, ease: "power2.out" },
      "-=0.5"
    );
  };

  // Update time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="w-full h-screen hero relative overflow-hidden">
      <Navbar />
      <Image Gallery images={images} />
      <div
        ref={heroTextRef}
        className="herotext leading-none left-8 absolute top-[40%] lg:top-[35%] text-[5.5rem]  lg:text-[8rem]   z-10 text-white "
      >
        <h1 className="font-[PPEiko-Regular]">24/7</h1>
        <h1 className="heading2 font-[StabilGrotesk-Regular]">HUNTING</h1>
        <h1 className="font-[StabilGrotesk-Regular]">THE NEXT</h1>
      </div>
      <div className="herofooter  font-[StabilGrotesk-Regular] flex justify-between w-full absolute z-10   p-6    bottom-0  text-white ">
  <a className="time text-1xl hidden lg:block ">{currentTime}</a>
  <a className="time text-1xl  ">THE CREATIVE STUDIO INSPORTS</a>
  <a className="time text-1xl  ">BASED IN THE NETHERLANDS</a>
</div>
     
    </div>
  );
};

export default Hero;