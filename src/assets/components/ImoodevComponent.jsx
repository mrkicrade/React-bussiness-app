import React from 'react'
import employer from '../images/employer.png'
import laptop from '../images/laptop.png'

function ImoodevComponent() {



  return (
    <div className='container mx-auto mt-[140px]'>
        <div className='flex gap-[30px] items-center mb-[140px]'>
            <div className='w-[50%]'>
                <h4 className='text-mainOrange text-[24px] font-bold mb-[16px]'>Who is Imoodev?</h4>
                <h2 className='text-[42px] font-bold text-mainBlue dark:text-white capitalize mb-[16px]'>we are a service engaged <br /> in digital marketing</h2>
                <p className='text-mainGray dark:text-white text-[16px] mb-[40px]'>Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
                <button className='bg-mainBlue dark:bg-white text-white dark:text-mainBlue font-bold cursor-pointer px-[36px] py-[16px]'>Consult now</button>
            </div>
            <div className='w-[50%]'>
                <img src={employer} alt="Employer" className='w-[585px] h-[520px]' />
            </div>
        </div>
        <div className='flex gap-[30px] items-center'>
            <div className='w-[50%]'>
                <img src={laptop} alt="Employer" className='w-[585px] h-[520px]' />
            </div>
            <div className='w-[50%]'>
                <h2 className='text-[42px] font-bold text-mainBlue dark:text-white capitalize mb-[16px]'>expand your business by building a website online</h2>
                <p className='text-mainGray dark:text-white text-[16px] mb-[40px]'>Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
                <button className='bg-mainBlue dark:bg-white text-white dark:text-mainBlue font-bold cursor-pointer px-[36px] py-[16px]'>Consult now</button>
            </div>
        </div>
    </div>
  )
}

export default ImoodevComponent