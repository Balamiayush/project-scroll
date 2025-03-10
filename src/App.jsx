import React, { useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import Rightheading from "./components/Rightheading";

const App = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const locomotiveScroll = new LocomotiveScroll();

    // Mouse follower animation
    const moveCursor = (e) => {
      gsap.to(".circle", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    // Select all anchor tags
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(".circle", { scale: 2.5, opacity: 0.8, duration: 0.2, ease: "power1.out" });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(".circle", { scale: 1, opacity: 1, duration: 0.2, ease: "power1.out" });
      });
    });

    // Hero Section Hover Animation
    const heroSection = document.querySelector(".hero");
    const heroHover = (e) => {
      const cursor = document.querySelector(".circle");
      cursor.textContent = "scroll";
      gsap.to(".circle", { scale: 5, duration: 0.5, ease: "power1.out" });
    };
    const heroLeave = () => {
      const cursor = document.querySelector(".circle");
      cursor.textContent = "";
      gsap.to(".circle", { scale: 1, duration: 0.2, ease: "power1.out" });
    };

    if (heroSection) {
      heroSection.addEventListener("mouseenter", heroHover);
      heroSection.addEventListener("mouseleave", heroLeave);
    }

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", null);
        link.removeEventListener("mouseleave", null);
      });

      if (heroSection) {
        heroSection.removeEventListener("mouseenter", heroHover);
        heroSection.removeEventListener("mouseleave", heroLeave);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <Rightheading />
      {/* Custom Cursor */}
      <div className="circle w-5 h-5 flex items-center text-[8px] justify-center  text-white bg-green-600 fixed z-[1000] rounded-full pointer-events-none"></div>
      <Loader />
      <Hero />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
};

export default App;
