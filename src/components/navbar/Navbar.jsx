"use client"
import Link from 'next/link'
import React from 'react'

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div>
      <Link href="/">NEXT</Link>
      </div>
      <div className='flex gap-3'>
        {links.map(link =>(
            <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        <button className='bg-green-300 text-gray-700 font-medium px-2 rounded-sm' onClick={(()=>{console.log("logged Out")})}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
