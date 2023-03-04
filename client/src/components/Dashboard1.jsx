import React from 'react'

const Dashboard1 = () => {
  return (
    <>
    <nav class="bg-purple-800 text-white flex justify-between">
        <img src="https://randomuser.me/api/portraits/men/75.jpg" className='h-12 pt-3 px-3 rounded-2xl'/>
        <ul class="px-28 py-4 flex space-x-5 justify-end">
            <li class="mx-2 cursor-pointer">Home</li>
            <li class="mx-2 cursor-pointer">About</li>
            <li class="mx-2 cursor-pointer">Catalogue</li>
            <li class="mx-2 cursor-pointer">Contact</li>
        </ul>
    </nav>
    <div className='container mx-auto'>
        <h1 className='text-blue-900 my-12'>This is Me</h1>
    </div>
    </>
  )
}

export default Dashboard1