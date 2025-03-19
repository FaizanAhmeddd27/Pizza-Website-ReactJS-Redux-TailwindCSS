import React from 'react'
import Navbar from '../components/Navbar'
import Items from '../components/Items'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import FoodData from '../FoodData/FoodData'

const Home = () => {
  return (
  <>
    <Navbar />
    <Items />
    <FoodItems />
    <Cart />
    

  </>

  )
}

export default Home