import React from 'react'

const Breakpoints = () => {
  return (
    <div>
      <h1 class="text-3xl lg:text-center  xl:text-left  xs:py-10 sm:py-0 primary">Welcome</h1>
    </div>
  )
}

export default Breakpoints;

// "sm": {'min': "640px" , 'max': "767px"}
// "md": {'min' : '760px', 'max' : '1023px'}
// 'lg': { 'min': '1024px', 'max' : '1279px'}
// "xl": {'min' : '1280px', 'max' : '1535px'}
// '2xl': { 'min': '1536px'}