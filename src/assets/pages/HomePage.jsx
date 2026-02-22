import React from 'react'
import HeroComponent from '../components/HeroComponent'
import CustomersComponents from '../components/CustomersComponents'
import { useOutletContext } from "react-router";

const HomePage = () => {
  const { activeDark } = useOutletContext();
  // console.log(activeDark);
  
  return (
    <>
      <HeroComponent />
      <CustomersComponents activeDark={activeDark} />
    </>
  )
}

export default HomePage