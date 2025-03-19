import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../redux/slices/CartSlice'
import toast, { Toaster } from 'react-hot-toast';

const ItemCard = ({ id, name, price, img, qty }) => {

  const dispatch = useDispatch();
  return (
    <div className='flex relative gap-2 shadow-md rounded-lg p-2 mt-2 mb-3 '>

      <MdDelete onClick={() => {
        dispatch(removeFromCart({ id, img, name, price, qty }));
        toast.error(`${name} Removed!`);
      }} className='absolute top-2 right-2 text-gray-600 text-xl cursor-pointer hover:text-red-500 transition-all ease-in-out' />

      <img src={img} className='w-[50px] h-[50px]' alt={name} />

      <div className='leading-5'>
        <h2 className='font-bold text-gray-800 text-[11px]'>{name}</h2>
        <div className='flex justify-between items-center'>
          <span className='text-green-500 font-bold'>{price}</span>

          <div className='flex justify-center items-center gap-2 ml-3 mt-2'>
            <AiOutlineMinus onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
            <span>{qty}</span>
            <AiOutlinePlus onClick={() => qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
