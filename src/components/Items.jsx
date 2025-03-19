import React, { useEffect, useState } from 'react';
import FoodData from '../FoodData/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const Items = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  useEffect(() => {
    console.log("FoodData:", FoodData); // Debugging
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
    console.log("Unique Categories:", uniqueCategories); // Debugging
  }, []);

  return (
    <div className='mx-6'>
      <h1 className='mt-10 text-2xl font-semibold'>Find the best food</h1>
      <div className='mt-5 flex gap-2 overflow-x-scroll scroll-smooth md:overflow-hidden'>
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`bg-gray-300 text-md px-4 py-2 rounded-lg cursor-pointer hover:bg-[rgb(34,197,99)] hover:text-white ${selectedCategory === "All" ? "bg-green-500 text-white" : ""}`}
        >
          All
        </button>
        {categories.map((cat, index) => (
          <button
            onClick={() => dispatch(setCategory(cat))}
            key={index}
            className={`bg-gray-300 text-md px-4 py-2 rounded-lg cursor-pointer hover:bg-[rgb(34,197,99)] hover:text-white ${selectedCategory === cat ? "bg-green-500 text-white" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Items;
