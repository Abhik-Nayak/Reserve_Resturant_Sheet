import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Breakpoints from './pages/Breakpoints';
import Containers from './pages/Containers';
import Textcolors from './pages/Textcolors';
import Gridtemplate from './pages/Gridtemplate';
import Navbar from './components/Navbar';
import Dashboard1 from './components/Dashboard1';//Simple landing page
import FormField from './components/FormField';
import Signup from './components/Signup';
import Service from './components/Service';
const App = () => {
  return (
    <>
    {/* <Navbar/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard1 />} />
          <Route exact path='/login' element={<FormField />} />
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/service" element={<Service/>}/>
        </Routes>
      </BrowserRouter>
    </>
    // <BrowserRouter>
    // <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]'>
    //     <Link to="/">
    //       <img src={logo} alt="logo" className='w-28 object-contain'/>
    //     </Link>
    //     <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
    //       Create
    //     </Link>
    // </header>
    // <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
    //   <Routes>
    //     <Route exact path='/' element={<Home/>}/>
    //     <Route exact path='/create-post' element={<Createpost/>}/>
    //   </Routes>
    // </main>
    // </BrowserRouter>
  )
}

export default App