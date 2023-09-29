"use client"
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

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

  const session = useSession();

  return (
    <div className='flex justify-between'>
      <div>
        <Link href="/">NEXT</Link>
      </div>

      <div className='flex gap-3'>
        <DarkModeToggle />
        {links.map(link => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        {session.status === "authenticated" &&

          <button className='bg-green-300 text-gray-700 font-medium px-2 rounded-sm' onClick={signOut}>Logout</button>

        }
      </div>
    </div>
  )
}

export default Navbar
