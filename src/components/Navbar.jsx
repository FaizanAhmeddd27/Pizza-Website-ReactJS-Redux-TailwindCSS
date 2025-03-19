import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col md:flex-row md:justify-between mx-6'>
      <div className='mt-[10px]'>
        <h3 className='text-[20px] text-gray-600 font-semibold'>{new Date().toUTCString().slice(0,16)}</h3>
        <p className='text-[16px] text-gray-700 mt-1'>SavorSpot</p>
      </div>

      <div className='mt-[10px]  '>
      <input onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" name="search" id="" placeholder="Search here..." autoComplete="off" className="p-3 border mr-8 bg-white text-sm rounded-lg outline-none w-full md:w-[25vw]"></input>
      </div>
    </nav>
  )
}

export default Navbar