import React from 'react'
import { IoMdClose } from "react-icons/io";
// import { MdDelete } from "react-icons/md";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = ({ id, name, price, desc, rat, img }) => {

    const [activeCard, setactiveCard] = useState(false)

    const cartItems = useSelector(state => state.cart.cart);

    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
   
    const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0);

    const navigate = useNavigate();


    return (
        <>

            <div className={`fixed right-0 top-0 bg-white w-full md:w-[20vw] h-full p-5 ${activeCard ? 'translate-x-0' : 'translate-x-full'} transition-all ease-linear duration-500 z-50`}>
                <div className=' flex justify-between items-center'>
                    <h2 className='text-xl font-semibold mt-3'>My Order</h2>
                    <span className='mt-3 border-2 bg-white border-gray-600 text-gray-600 font-bold p-1 rounded-md text-xl hover:text-red-300 hover:border-red-300 cursor-pointer '><IoMdClose onClick={() => setactiveCard(!activeCard)} /></span>
                </div>

                <div className='h-[60vh] overflow-y-scroll scroll-smooth mt-4'>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <ItemCard key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} qty={item.qty} />
                        ))
                    ) : (
                        <h2 className='text-xl text-center font-semibold mt-3'>No Items in Cart</h2>
                    )}

                </div>



                <div className='absolute bottom-0'>
                    <h3 className='font-semibold text-gray-800'>Items : {totalQty}</h3>
                    <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice}</h3>
                    <hr className='w-[90vw] md:w-[18vw] my-2' />
                    <button onClick={()=>navigate("/success")} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] md:w-[18vw] mb-5'>Checkout</button>
                </div>

            </div>
            <FaShoppingCart onClick={() => setactiveCard(!activeCard)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all" }`} />

        </>


    )
}

export default Cart