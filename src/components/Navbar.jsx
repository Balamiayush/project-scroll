import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger) 
  const itemsRef = useRef([])
  useGSAP(()=>{
    gsap.to("ul,svg",{
      duration:0.5,
      scale:0.6,
      scrollTrigger:{
        trigger: ".loader",
        start: "top",
        end: "bottom",
        scrub: true,
        // markers:true
      }
    })
  })
  useEffect(() => {
    // Reset refs array when component mounts
    itemsRef.current = itemsRef.current.slice(0, 5)
  }, [])

  const handleMouseEnter = (index) => {
    const item = itemsRef.current[index]
    if (!item) return

    const span1 = item.querySelector('.span1')
    const span2 = item.querySelector('.span2')

    gsap.to(span1, {
      y: -30,
      rotateX: -90,
      duration: 0.4,
      ease: "power2.out"
    })

    gsap.fromTo(span2, 
      { y: 30, rotateX: 90, opacity: 0 },
      { y: 0, rotateX: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    )
  }

  const handleMouseLeave = (index) => {
    const item = itemsRef.current[index]
    if (!item) return

    const span1 = item.querySelector('.span1')
    const span2 = item.querySelector('.span2')

    gsap.to(span1, {
      y: 0,
      rotateX: 0,
      duration: 0.4,
      ease: "power2.in"
    })

    gsap.to(span2, {
      y: 30,
      rotateX: 90, 
      opacity: 0,
      duration: 0.4, 
      ease: "power2.in"
    })

    // Fixing the ScrollTrigger and markers
  }

  return (
    <div

    className='w-[90%] flex h-40 font-[StabilGrotesk-Regular] fixed navbar top-0 p-8 items-center justify-between z-[100]'>
      <svg height="820" viewBox="0 0 1066 820" width="80" xmlns="http://www.w3.org/2000/svg">
        <path d="m532.999 546.66h-266.499v-273.32h532.196l266.504-273.34h-598.835l-466.365 478.335v341.665h333.115l399.749-409.99v409.99h266.481v-478.335h-266.481z" fill="#fff"></path>
      </svg>
      
      <motion.ul 
        className='flex ul text-white flex-col relative gap-1 top-5 uppercase items-center justify-center overflow-hidden lg:text-2xl'
        // whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        {
          ["WORK", "STUDIO", "ARCHIVE", "JOBS", "CONTACT"].map((item, index) => {
            return (
              <motion.li
                ref={el => itemsRef.current[index] = el}
                className='cursor-pointer overflow-hidden items-center relative flex flex-col perspective-[800px]'
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                // whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <motion.a
                  className='span1 relative block transform-style-3d backface-hidden'
                  style={{ transformOrigin: "center center" }}
                >
                  {item}
                </motion.a>
                <motion.a 
                  className='absolute text-green-500 font-[PPEiko-Regular] span2 block transform-style-3d backface-hidden'
                  style={{ 
                    transformOrigin: "center center",
                    opacity: 0
                  }}
                >
                  {item}
                </motion.a>
              </motion.li>
            )
          })
        }
      </motion.ul>
    </div>
  )
}

export default Navbar
