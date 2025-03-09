import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Page3 = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      image:
        "https://gh22.codebydennis.com/media/pages/work/easports-fgs22/5ad0b217eb-1728463388/fnatic-crops-1080x-q72.jpg",
    },
    {
      id: 2,
      image:
        "https://gh22.codebydennis.com/media/pages/work/future-goals/e2ab33fde1-1728463383/logo-board-2-1080x-q72.jpg",
    },
    {
      id: 3,
      image:
        "https://gh22.codebydennis.com/media/pages/work/knvb-25-years-of-just-doing-it/4f5faaddb9-1728463379/thumb-2-1080x-q72.jpg",
    },
    {
      id: 4,
      image:
        "https://gh22.codebydennis.com/media/pages/work/future-goals/e2ab33fde1-1728463383/logo-board-2-1080x-q72.jpg",
    },
  ]);

  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((el) => {
      if (el) {
        gsap.set(el, { scale: 1, borderRadius: "0%", filter: "grayscale(100%)" });
      }
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(imageRefs.current[index], {
      borderRadius: "50%",
      filter: "grayscale(100%)", // Apply grayscale when hover is removed
      duration: 0.5,
      ease: "power2.out",
    });
};

const handleMouseLeave = (index) => {
    gsap.to(imageRefs.current[index], {
        filter: "grayscale(0%)", // Remove grayscale on hover
      borderRadius: "0%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className="w-[90%] min-h-screen flex flex-col lg:flex-row lg:flex-wrap items-center relative z-10 justify-between gap-10 p-8">
      {images.map((item, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className="w-[40%] h-[60vh] overflow-hidden rounded-2xl cursor-pointer"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <img src={item.image} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Page3;
