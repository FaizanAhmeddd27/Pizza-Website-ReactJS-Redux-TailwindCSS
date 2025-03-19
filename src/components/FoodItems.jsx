import React from 'react';
import Card from './Card';
import FoodData from '../FoodData/FoodData';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);

  const handleToast = (name) => {
    toast.success(`Added ${name}`);
  };
  
  const search = useSelector((state) => state.search.search);
  
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className='flex justify-center items-center flex-col mr-9 md:flex-row flex-wrap gap-1 px-6'>
        {
        FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase()); 
          } else {
            return food.category === category && food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((food) => (
          <Card 
            key={food.id}
            id={food.id}
            desc={food.desc}
            name={food.name}
            img={food.img}
            price={food.price}
            cat={food.category} 
            rat={food.rating}
            handleToast={handleToast}
          />
        ))

        }
      </div>
    </>
  );
};

export default FoodItems;
