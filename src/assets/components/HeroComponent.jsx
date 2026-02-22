import React from 'react'

const HeroComponent = () => {
  return (
    <div className='container mx-auto mt-[59px]'>
      <h1 className='text-[48px] text:mainBlue dark:text-white text-center font-bold lg:w-[90%] mx-auto'>We are creative agency capable of creating outstanding designs and websites</h1>
      <p className='text:mainGray dark:text-white text-[16px] text-center mt-[53px] w-[70%] mx-auto lg:w-[50%]'>With Immodev Reach more customers and grow your business potential online by building a website with us</p>
      <div className='flex justify-center gap-[30px] mt-[36px] mb-[140px]'>
        <button className='bg-mainBlue dark:bg-white hover:bg-mainBlue/80 dark:hover:bg-white/80 text-white dark:text-mainBlue text-[16px] text-bold px-[87px] py-[16px] cursor-pointer transition-colors duration-300'>Consult now</button>
        <button className='bg-white dark:bg-mainBlue hover:bg-mainBlue/20 dark:hover:bg-white/20 text-mainBlue dark:text-white text-[16px] text-bold px-[87px] py-[16px] border border-mainBlue dark:border-white cursor-pointer transition-colors duration-300'>About Us</button>
      </div>
    </div>
  )
}

export default HeroComponent