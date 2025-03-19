import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';


const Card = ({ id, name, price, desc, rat, img, handleToast }) => {
    const dispatch = useDispatch();
    return (
      <div className=' mx-6 mt-7 p-4 border border-gray-300 rounded-lg w-[240px] shadow-md bg-white mb-4 flex flex-col justify-between'>
        <img 
          src={img}
          alt={name} 
          className='w-full h-[140px] object-cover rounded-md hover:scale-110 cursor-grab transition-all ease-in-out  duration-500'  
        />
  
        {/* Name and Price */}
        <div className='flex justify-between items-center mt-2'>
          <p className='font-semibold'>{name}</p>
          <span className='text-green-400 font-bold'>Rs {price}</span>
        </div>
  
        {/* Description */}
        <p className='text-sm text-gray-600 mt-1 desc'>
          {desc.slice(0, 50)}...
        </p>
  
        {/* Rating and Add to Cart Button */}
        <div className='flex items-center justify-between mt-2'>
          <span className='font-semibold flex items-center gap-1'>
            <FaStar className='text-yellow-500' /> {rat}
          </span>
          <button onClick={()=>{
            dispatch(addToCart({id, name, price, rat, img, qty: 1}))
            handleToast(name)
          }} className='text-white text-sm px-2 py-1 rounded-lg bg-[rgb(34,197,99)] hover:bg-green-900 cursor-pointer'>
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;
  