"use client";
import {BsFillSunFill,BsMoonFill} from "react-icons/bs";
import { useTheme  } from "next-themes";
import { useEffect, useState } from "react";
const DarkModeSwitch = () => {
    const {systemTheme,theme,setTheme} = useTheme();
    const [mounted,setMounted] = useState(false);

    useEffect(()=>{setMounted(true)},[])
    const currentTheme = theme === "system"? systemTheme:theme;
  return (
    <>
        {mounted && currentTheme == "dark" ? <BsFillSunFill  onClick={()=>{setTheme('light')}} className="cursor-pointer hover:text-amber-500 text-xl"/> : <BsMoonFill className="cursor-pointer hover:text-amber-500 text-xl" onClick={()=>{setTheme('dark')}}/>}
        
    </>
  )
}

export default DarkModeSwitch