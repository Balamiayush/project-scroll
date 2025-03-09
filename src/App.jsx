import React from 'react'
// import Navbar from './components/Navbar'
// import Landing from './components/Landing'
// import Work from './components/Work'
// import Playreel from './components/Playreel'
// import Images from './components/Images'
// import Spread from './components/Spread'
import Loader from './components/Loader';
import Hero from './components/Hero';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-[200vh]  '>
      <Loader/>
      <Hero/>
      
    </div>
    
  )
}

export default App