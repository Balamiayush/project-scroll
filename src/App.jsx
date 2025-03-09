import React from 'react'
// import Navbar from './components/Navbar'
// import Landing from './components/Landing'
// import Work from './components/Work'
// import Playreel from './components/Playreel'
// import Images from './components/Images'
// import Spread from './components/Spread'
import Loader from './components/Loader';
import Hero from './components/Hero';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';


import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Rightheading from './components/Rightheading';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  useGSAP(()=>{
    window.addEventListener("mousemove",(e)=>{
      let x = e.clientX;
      let y = e.clientY;
      gsap.to(".circle", {
        x: x,
        y: y,
        duration: 0.3,
      })
    })

  })
  return (
    <div className='w-full  '>
      <Rightheading/>
      <div className="circle w-5 h-5 bg-green-600 fixed z-[1000] rounded-full"></div>
      <Loader/>
      <Hero/>
      <Page2/>
      <Page3/>
      <Page4/>
      
    </div>
    
  )
}

export default App