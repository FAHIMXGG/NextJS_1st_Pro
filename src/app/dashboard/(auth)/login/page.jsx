"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Login = () => {
  const session = useSession();
  const router = useRouter()

  if (session.status === "loading") {
    return <p>Loading...</p>
}
if (session.status === "authenticated") {
    router?.push("/dashboard")
}



  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    // const gg = ({email, password, name})
    // console.log(gg)

    signIn("credentials", { email, password })


  }

  return (
    <div className='md:mt-[300px]'>
      <div className='flex justify-center '>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-[400px] text-green-400'>
          <input type="email" placeholder='email' className='p-[10px] bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          <input type="password" placeholder='password' className='p-[10px] bg-transparent rounded-md border-[1px] border-gray-600 font-semibold ' required />
          <button className='btn'>Login</button>
        </form>

      </div>
      <center><button onClick={() => signIn("google")}>Login with Google</button></center>
    </div>
  )
}

export default Login
