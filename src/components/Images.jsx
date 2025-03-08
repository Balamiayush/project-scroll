import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";

const Images = () => {
  gsap.registerPlugin(ScrollTrigger);


  const images = [
    { id: 1, src: "https://gh22.codebydennis.com/media/pages/home/2cca201a59-1728463366/01-1920x-q72.jpg" },
    { id: 2, src: "https://gh22.codebydennis.com/media/pages/home/1cc83cd4be-1728463366/08-1920x-q72.jpg" },
    { id: 3, src: "https://gh22.codebydennis.com/media/pages/home/4539e25d6b-1728463366/02-1920x-q72.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRefs = useRef([]); // Store image references
  const scrollContainer = useRef(null); // Store locomotive scroll container reference
  let locoScroll = useRef(null);
  useGSAP(()=>{
    gsap.to("img",{
        duration: 1,
        scrollTrigger:{
            trigger:scrollContainer,
            start: "top",
            end: "bottom",
            pin:true
        }
    })//i want to make a sticky image 
  })
  // 🚀 Initialize Locomotive Scroll & Sync with ScrollTrigger
  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      multiplier: 0.8,
    });

    // 🚀 Sync Locomotive Scroll with GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(scrollContainer.current, {
      scrollTop(value) {
        return arguments.length ? locoScroll.current.scrollTo(value, 0, 0) : locoScroll.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.current.update());
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);

  // 🌀 GSAP Scroll Animation for Image Opacity
  useGSAP(() => {
    gsap.to(imgRefs.current, {
      opacity: 0.5,
      scrollTrigger: {
        trigger: "body",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        scroller: scrollContainer.current, // Use locomotive's scroll container
        markers: true, // ✅ Debugging (Remove later)
      }
    });
  });

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
      }
    });

    // Fade out current image
    tl.to(imgRefs.current[currentIndex], {
      duration: 1,
      opacity: 0,
      scale: 1.1,
      ease: "power2.out"
    });

    // Fade in next image
    tl.fromTo(
      imgRefs.current[nextIndex],
      { opacity: 0.8, scale: 1.05 },
      { duration: 1, opacity: 1, scale: 1, ease: "power2.out" },
      "-=0.5"
    );
  };

  return (
    <div ref={scrollContainer} className="w-full h-[200vh] relative ">
    
        {images.map((image, index) => (
          <img
            key={image.id}
            ref={(el) => (imgRefs.current[index] = el)}
            src={image.src}
            alt={`Hero Image ${index + 1}`}
            data-scroll
            data-scroll-speed="2"
            className={`w-full h-full  object-cover fixed transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-1" : "opacity-0"
            }`}
            style={{ zIndex: index === currentIndex ? 2 : 1 }}
          />
        ))}
      </div>
  );
};

export default Images;
