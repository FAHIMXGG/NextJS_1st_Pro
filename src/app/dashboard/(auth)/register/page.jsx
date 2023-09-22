"use client"
import Link from 'next/link'
import React from 'react'

const Register = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <div className='flex justify-center h-screen items-center flex-col gap-3'>
        <form  onSubmit={handleSubmit} className='flex flex-col gap-5 w-[400px] text-green-400'>
          <input type="text" placeholder='username' className='p-[10px] bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required/>
          <input type="email" placeholder='email' className='p-[10px] bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required/>
          <input type="password" placeholder='password' className='p-[10px] bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required/>
          <button className='btn'>Register</button>
        </form>
        <Link href="/dashboard/login" className='text-green-500'>Login with an existing account</Link>
      </div>
      
    </div>
  )
}

export default Register
