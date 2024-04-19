import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Details from './components/Details'
import { FaArrowLeft } from "react-icons/fa6";
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  const {search,pathname }=useLocation()
  return (

    <div className='h-screen w-full '>
    {(pathname != "/" || search.length > 0) && (<Link to="/" className='absolute top-24 left-60 font-semibold flex items-center gap-2 text-lg  px-2 py-1 bg-[#46586f50] rounded-lg hover:bg-blue-400'><FaArrowLeft />Go Back</Link>)}
      
       <Navbar/>
       <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/create' element={ <Create/>}></Route>
        <Route path='/details/:id' element={ <Details/>}></Route>
        <Route path='/edit/:id' element={ <Edit/>}></Route>

       </Routes>
    </div>
  )
}

export default App