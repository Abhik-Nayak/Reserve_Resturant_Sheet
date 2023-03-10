import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className='h-screen snap-center flex flex-col '>
        <Navbar/>
        <div className='flex h-screen w-full mx-auto  snap-center justify-between'>
            <div>
                <h1>Think, Make, Solve</h1>
                <div>
                    <img src=""/>
                    <h3>What we do </h3>
                </div>
            </div>
            <div>Right</div>
        </div>
    </div>
  )
}

export default Hero