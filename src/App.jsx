import './App.css'
import { Outlet } from 'react-router'
import { useState,useEffect } from 'react'
import NavbarComponent from './assets/components/NavbarComponent';


function App() {

  const [activeDark, setActiveDark] = useState(true);

  // useEffect(() => {
  //   document.documentElement.classList.add("dark");
  // }, []);
  

  return (
    <div className={activeDark ? 'dark dark:bg-mainBlue' : ''}>
    
      <NavbarComponent activeDark={activeDark} setActiveDark={setActiveDark} />
      


      <Outlet context={{ activeDark, setActiveDark }} />
    </div>
  )
}

export default App
