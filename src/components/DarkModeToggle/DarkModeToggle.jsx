"use client"

import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
    
    const {toggle, mode} = useContext(ThemeContext)

    return (
        <div className='w-[50px] h-[28px] border border-zinc-400 rounded-2xl flex justify-between  items-center px-2 relative cursor-pointer' onClick={toggle}>
            <div className='text-[12px]'>🌙</div>
            <div className='text-[12px]'>☀️</div>
            <div className='w-[15px] h-[15px] bg-green-500 rounded-full absolute' style={mode === "synthwave" ? { left: "px" } : { right: "8px" }} />
        </div>
    );
};

export default DarkModeToggle;