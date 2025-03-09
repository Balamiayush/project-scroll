import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader = () => {
    const h1Ref = useRef(null);
    const loaderRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial backdropFilter setup (needed for smooth transition)
        gsap.set(loaderRef.current, { backdropFilter: "blur(0px)" });

        tl.from("h1", {
            duration: 1,
            y: '100%',
            stagger: 0.2,
            ease: "power2.inOut",
        })
        .to(loaderRef.current, {
            duration: 1,
            top: '-100%',  // Ensure your parent container has `position: relative`
            ease: "power2.inOut",
        },+2)
        .set(loaderRef.current, { backdropFilter: "blur(10px)" }); // Ensure final state is smooth
    }, []);

    const words = ["The", "Creative", "studio", "in", "sport"];

    return (
        <div ref={loaderRef} className='w-full loader h-screen bg-[#9BFA00] fixed top-0 left-0 flex items-center justify-center overflow-hidden z-[1000]'>
            <div
            
            ref={h1Ref} className='uppercase w-full font-[StabilGrotesk-Regular] flex items-center justify-center text-2xl lg:text-[3rem]  overflow-hidden font-semibold'>
                {words.map((word, index) => (
                    <h1 className='span    lg:h-[10vh] overflow-hidden ' key={index}>{word}&nbsp;</h1>
                ))}
            </div>
        </div>
    );
};

export default Loader;
