import React from 'react';
import Navbar from './Navbar';
import home from "../assets/desktop.jpg"
const Hero = () => {
  return (
    <div className='h-screen snap-center flex flex-col '>
      <Navbar />
      <div className='flex h-screen w-full mx-auto  snap-center justify-between'>
        <div className='flex-2 flex flex-col justify-center gap-5'>
          <h1 className='text-7xl'>Think, Make, Solve</h1>
          <div>
            <img src="" />
            <h3 className=''>What we do </h3>
          </div>
          <div>
            We enjoy creating delightful, human-centered digital experiences.
          </div>
          <button>Learn More</button>
        </div>
        <div>
          <img className='w-2/5' src={home}/>
        </div>
      </div>
    </div>
  )
}

export default Hero