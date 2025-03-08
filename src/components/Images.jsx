
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
const Images = () => {
    const images = [
        { id: 1, src: "https://gh22.codebydennis.com/media/pages/home/2cca201a59-1728463366/01-1920x-q72.jpg" },
        { id: 2, src: "https://gh22.codebydennis.com/media/pages/home/1cc83cd4be-1728463366/08-1920x-q72.jpg" },
        { id: 3, src: "https://gh22.codebydennis.com/media/pages/home/4539e25d6b-1728463366/02-1920x-q72.jpg" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const imgRefs = useRef([]); // Array to hold refs for images

    useEffect(() => {
        const interval = setInterval(() => {
            transitionToNextImage();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const transitionToNextImage = () => {
        const nextIndex = (currentIndex + 1) % images.length; // Calculate next index

        // Ensure both images exist
        if (!imgRefs.current[currentIndex] || !imgRefs.current[nextIndex]) return;

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentIndex(nextIndex); // Update current index after animation
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
        tl.fromTo(imgRefs.current[nextIndex], 
            { opacity: 0.8, scale: 1.05 },
            { duration: 1, opacity: 1, scale: 1, ease: "power2.out" },
            "-=0.5" // Overlap animation slightly for smooth transition
        );
    };

  return (
    <div className='w-full h-screen relative'>
            {images.map((image, index) => (
                <img
                    key={image.id}
                    ref={(el) => (imgRefs.current[index] = el)} // Store ref in array
                    src={image.src}
                    alt={`Hero Image ${index + 1}`}
                    className={`w-full h-full object-cover absolute z-[10] transition-opacity duration-1000 ${index === currentIndex ? "opacity-1" : "opacity-0"}`}
                    style={{ zIndex: index === currentIndex ? 2 : 1 }} // Ensure correct stacking
                />
            ))}
    </div>
  )
}

export default Images