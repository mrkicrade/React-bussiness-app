import React from 'react';
import development from '../images/Edit.png';
import developmentBlack from '../images/editBlack.png';
import designLogo from '../images/Heart.png';
import graphicDesign from '../images/graphicDesign.png';
import category from '../images/category.png';


function CustomersComponents({activeDark}) {
    // console.log(activeDark);
    
  return (
    <div className='container mx-auto '>
        <div className='container mx-auto flex justify-between lg:flex-row flex-col items-center gap-[30px]'>    
            <div className='w-[50%]'>
                <span className='text-mainOrange text-[24px] font-bold'>What Does Imoodev Do?</span>
                <h2 className='text-[42px] font-bold text-mainBlue dark:text-white'>Analyzing Target <br /> Customers with the Right!</h2>
            </div>
            <div className='w-[50%] mb-[40px]'>
                <p className='text-mainGray dark:text-white text-[16px]'>Do not miss this opportunity. With our experience, Whello will find something unique in your brand. Analyze and try to follow what your audience really likes and is looking for, so that your customers will be more loyal to you.</p>
            </div>
        </div>
        <div className='container mx-auto flex flex-col justify-center items-center'>

            <div className='flex justify-center items-center gap-[30px] w-[50%] mb-[32px]'>
            {/* Web Development */}
                <div className=' bg-mainBlue dark:bg-white border rounded-[10px] w-[584px] h-[308px]'>
                    <div className='border rounded-full w-[64px] h-[64px] mt-[32px] ml-[32px] flex justify-center items-center bg-white dark:bg-mainBlue'>
                        <img src={activeDark ? development : developmentBlack} alt="logo" />
                    </div>
                    <h3 className='text-[24px] font-bold text-white dark:text-mainBlue ml-[32px] mt-[32px] mb-[23px]'>Web Development</h3>
                    <p className='text-white dark:text-mainBlue text-[16px] mx-[32px] mt-[23px] w-[410px]'>Easy to modify from the provided template settings page without the need for complicated coding skills.</p>
                </div>
                
                {/* UI Design */}
                <div className=' bg-white dark:bg-mainBlue border border-lightGray rounded-[10px] w-[584px] h-[308px]'>
                    <div className='border border-lightGray dark:border-white rounded-full w-[64px] h-[64px] mt-[32px] ml-[32px] flex justify-center items-center bg-iconBlue dark:bg- '>
                        <img src={designLogo} alt="logo" />
                    </div>
                    <h3 className='text-[24px] font-bold text-mainBlue dark:text-white ml-[32px] mt-[32px] mb-[23px]'>UI Design</h3>
                    <p className='text-lightGray dark:text-white text-[16px] mx-[32px] mt-[23px] w-[410px]'>Equipped with basic SEO techniques such as H1 H2 H3 and breadcrumbs so that the website is liked by search engines like Google, Bing etc.</p>
                </div>
            </div>

            <div className='flex justify-center items-center gap-[30px] w-[50%]'>
                {/* Graphic Design */}
                <div className=' bg-white dark:bg-mainBlue border border-lightGray rounded-[10px] w-[584px] h-[308px]'>
                    <div className='border border-lightGray dark:border-white rounded-full w-[64px] h-[64px] mt-[32px] ml-[32px] flex justify-center items-center bg-iconViolet'>
                        <img src={graphicDesign} alt="logo" />
                    </div>
                    <h3 className='text-[24px] font-bold text-mainBlue dark:text-white ml-[32px] mt-[32px] mb-[23px]'>Graphic Design</h3>
                    <p className='text-lightGray dark:text-white text-[16px] mx-[32px] mt-[23px] w-[410px]'>Elegant and professional design, your website will have more value & attractive in the eyes of your visitors or customers.</p>
                </div>
                {/* Invitations and gifts */}
                <div className=' bg-white dark:bg-mainBlue border border-lightGray rounded-[10px] w-[584px] h-[308px]'>
                    <div className='border border-lightGray dark:border-white rounded-full w-[64px] h-[64px] mt-[32px] ml-[32px] flex justify-center items-center bg-iconRed'>
                        <img src={category} alt="logo" />
                    </div>
                    <h3 className='text-[24px] font-bold text-mainBlue dark:text-white ml-[32px] mt-[32px] mb-[23px]'>Invitations and gifts</h3>
                    <p className='text-lightGray dark:text-white text-[16px] mx-[32px] mt-[23px] w-[410px]'>Easy to use even for new people and comes with documentation to make it easier</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomersComponents