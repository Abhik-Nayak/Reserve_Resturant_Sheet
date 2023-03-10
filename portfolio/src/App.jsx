import React from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Who from './components/Who';
import Works from './components/Works';

const App = () => {
  return (
    <div className='h-screen bg-[#13005A] text-white snap-y-mandatory scroll-smooth overflow-y-auto no-scrollbar ' >
        <Hero/>
        <Who/>
        <Works/>
        <Contact/>
    </div>
  )
}

export default App