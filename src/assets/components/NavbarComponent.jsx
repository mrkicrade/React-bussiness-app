import React from 'react';
import logo from '../Imoodev.png';
import darkLogo from '../darkImoodev.png';
import { NavLink } from 'react-router-dom';

// I C O N S
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const NavbarComponent = ({ activeDark, setActiveDark }) => {
    let navItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Features',
            path: '/features'
        },
        {
            name: 'Themes',
            path: '/themes'
        },
        {
            name: 'Blog',
            path: '/blog'
        }
    ];

    function toogleDarkMode() {
        setActiveDark(!activeDark);
    }

    return (
        <div className='container mx-auto flex justify-between items-center h-[100px]'>
            {/* <img src={logo} alt="logo" /> */}
            {activeDark ? <img src={logo} alt="logo" /> : <img src={darkLogo} alt="logo" />}

            <div className='flex items-center gap-[20px]'>
                <ul className='dark:text-white text-mainBlue flex gap-[10px]'>
                    {navItems.map((item, index) => (
                        <li key={index}><NavLink to={item.path}>{item.name}</NavLink></li>
                    ))}
                </ul>
                <div>
                    {activeDark ? <CiSun onClick={toogleDarkMode} className='cursor-pointer' color='white' size={32} /> : <FaMoon onClick={toogleDarkMode} className='cursor-pointer' size={28} />}


                </div>
            </div>


        </div>
    )
}

export default NavbarComponent