import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";


function Navbar() {
  return (
    <nav className='fixed h-20 w-screen bg-slate-100 flex items-center justify-around'>

        <h1 className='text-4xl font-semibold'>Mizso</h1>
        <div className="h-10 w-1/3 flex items-center justify-between">
        <input className='text-xl h-full w-11/12 px-2 rounded-xl' type="text" name="" placeholder='Search for Products, Brands and More' />
        <FaSearch className='text-2xl opacity-30' />
        </div>
       <div className="flex gap-12">
        <div className="flex items-center gap-2 text-xl font-semibold border-2 px-3 py-1 rounded-xl border-black hover:text-white hover:bg-black"><FaOpencart className='text-3xl' />: 0</div>
       <button className='flex items-center gap-2 text-xl border-b-2 pb-2 px-2 border-black rounded-xl  hover:text-white hover:bg-black' type="button"> <FaUserCircle className='text-2xl'  /> Login</button>
       </div>
    </nav>
  )
}

export default Navbar