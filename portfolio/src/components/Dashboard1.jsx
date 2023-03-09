import React, { useState } from 'react';
import icon from "../assets/icon.png";
import home from "../assets/user.jpg";
const Dashboard1 = () => {
    return (
        <>
            <div className='sm:flex justify-between items-center mt-20 ml-20'>
                <div className=' md:w-3/5 w-4/5 mt-10 animate__animated animate__jackInTheBox'>
                    <h1 className='text-4xl'>Welcome to
                        <span class="text-blue-500 font-bold"> Tailwind CSS </span>Website</h1>
                    <p>I’ve written a few thousand words
                        on why traditional “semantic class names” are the reason
                        CSS is hard to maintain, but the truth is you’re never going
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum expedita magni, dolorum temporibus magnam provident quasi, ducimus corrupti fuga animi cumque odit minus voluptates consequuntur tempora doloremque numquam deleniti id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique modi magni enim, magnam placeat et unde minus quidem nemo harum ratione dolore iste impedit exercitationem accusantium, rerum sint at!
                    </p>
                    <button className='bg-blue-500 px-2 py-2 mr-2 mb-2 text-white rounded hover:bg-[#2699fb]'>Subscribe</button>
                    <button className='bg-gray-300 px-2 py-2 rounded hover:bg-gray-100'>Contact With Us</button>
                    <br />
                    <img src={icon} width="100" class="mt-4" />
                </div>
                <div className='md:w-2/5 w-3/5'>
                    <img src={home} />
                </div>
            </div>
        </>
    )
}

export default Dashboard1