import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Images = ({ images }) => {
  gsap.registerPlugin(ScrollTrigger);

  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      transitionToNextImage();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]); // Make sure to include currentIndex in the dependency array

  const transitionToNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    if (!imgRefs.current[currentIndex] || !imgRefs.current[nextIndex]) return;

    const tl = gsap.timeline({
      onComplete: () => setCurrentIndex(nextIndex),
    });

    tl.to(imgRefs.current[currentIndex], {
      duration: 1,
      opacity: 0,
      scale: 1.1,
      ease: "power2.out",
    });

    tl.fromTo(
      imgRefs.current[nextIndex],
      { opacity: 0.8, scale: 1.05 },
      { duration: 1, opacity: 1, scale: 1, ease: "power2.out" },
      "-=0.5"
    );
  };

  // GSAP Animation for background change on scroll
  useGSAP(() => {
    // ✅ Black overlay that appears on scroll
    gsap.to(".overlay", {
      opacity: 0.8,
      ease: "power2.inOut",
      background: "black",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "center center",
        scrub: true,
      },
    });

    // ✅ Fix: Instead of hiding images, reduce opacity slightly
    gsap.to(imgRefs.current, {
      opacity: 0, // Instead of 0, make them slightly visible
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false, // Set to true for debugging, false for production
      },
    });
  }, []);

  return (
    <div className="w-full relative hero" ref={containerRef}>
      {/* Black overlay div that appears on scroll */}
      <div className="overlay fixed inset-0 z-10 pointer-events-none opacity-0"></div>

      {/* Container for the images */}
      <div className="img-container imgsss w-full h-full relative flex items-center justify-center">
        {images.map((image, index) => (
          <img
            key={image.id}
            ref={(el) => (imgRefs.current[index] = el)}
            src={image.src}
            alt={`Hero Image ${index + 1}`}
            className={`w-full h-full object-cover img fixed top-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{ zIndex: index === currentIndex ? 2 : 1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
