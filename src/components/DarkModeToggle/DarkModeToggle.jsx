import React from 'react';

const DarkModeToggle = () => {
    const mode = 'dark'
    return (
        <div className='w-[50px] h-[28px] border border-zinc-400 rounded-2xl flex justify-between  items-center px-2 relative cursor-pointer'>
            <div className='text-[12px]'>🌙</div>
            <div className='text-[12px]'>☀️</div>
            <div className='w-[15px] h-[15px] bg-green-500 rounded-full absolute' style={mode === "light" ? { left: "px" } : { right: "6px" }} />
        </div>
    );
};

export default DarkModeToggle;