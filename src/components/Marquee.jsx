import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Marquee = () => {
  const containerRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const { scrollYProgress } = useScroll();
  const duration = useTransform(scrollYProgress, [0, 1], [20, 6]); // Speed adjusts with scroll

  const imagePaths = [
    "/1fe9440f.svg",
    "/4f073d60.svg",
    "/7acf5193.svg",
    "/8c274b24.svg",
    "/033d3d36.svg",
    "/34b8eee0.svg",
    "/67b31743.svg",
    "/b9461c7f.svg"

    
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        const images = containerRef.current.querySelectorAll("img");
        let totalWidth = 0;

        images.forEach((img) => {
          totalWidth += img.offsetWidth || 200;
        });

        setMarqueeWidth(totalWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden w-full my-8 relative z-10">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", `-${marqueeWidth / 2}px`] }}
        transition={{
          duration: duration.get(),
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ minWidth: `${marqueeWidth}px` }}
      >
        {[...imagePaths, ...imagePaths].map((src, index) => (
          <img key={index} src={src} alt={`Marquee ${index + 1}`} className="mx-8 h-16 md:h-20" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
