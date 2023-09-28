"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const gg = ({email, password, name})
    // console.log(gg)


    try{
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });

      res.status === 201 && router.push("/dashboard/login?success=Account has been created")

    } catch (err) {
      setErr(true)
    }
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
        {err && "Something went wrong"}
        <Link href="/dashboard/login" className='text-green-500'>Login with an existing account</Link>
      </div>
      
    </div>
  )
}

export default Register
