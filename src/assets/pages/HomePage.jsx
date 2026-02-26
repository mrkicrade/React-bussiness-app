import React from 'react'
import HeroComponent from '../components/HeroComponent'
import CustomersComponents from '../components/CustomersComponents'
import { useOutletContext } from "react-router";
import ImoodevComponent from '../components/ImoodevComponent';


const HomePage = () => {
  const { activeDark } = useOutletContext();
  // console.log(activeDark);
  
  return (
    <>
      <HeroComponent />
      <CustomersComponents activeDark={activeDark} />
      <ImoodevComponent />
    </>
  )
}

export default HomePage