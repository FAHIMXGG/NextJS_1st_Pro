"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';
import useSWR from 'swr'
import Swal from 'sweetalert2'

const Dashboard = () => {
    // const [data, setData] = useState([])
    // const [err, setErr] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true)
    //             const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

    //             if (!res.ok) {
    //                 setErr(true)
    //             }

    //         const data = await res.json()

    //         setData(data)    
    //         setIsLoading(false)
    //     }
    //     getData()
    // }, [])

    const session = useSession()
    console.log(session)

    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

    console.log(data)


    if (session.status === "loading") {
        return <p>Loading...</p>
    }
    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    const handleSubmit = async (e) => {

        let timerInterval
        Swal.fire({
            title: 'Please Wait',
            timer: 20000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })

        e.preventDefault()
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;

        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title, desc, img, content, username: session.data.user.name,
                })
            })
            Swal.fire(
                'Done!',
                'Post uploaded!',
                'success'
            )
            e.target.reset();
            mutate()

        } catch (err) {
            console.log(err)
        }
    }

    //console.log(data)
    if (session.status === "authenticated") {
        return (
            <div className='flex  justify-between mt-20'>
                {/* //post */}
                <div className='w-1/2'>
                    {isLoading ? "loading" :
                        [...data].reverse().map((post) => (
                            <div key={post._id} className='flex items-center gap-10'>
                                <div>
                                    <Image src={post.img} width={200} height={150} alt="" ></Image>
                                </div>
                                <h2>{post.title}</h2>
                                <span>X</span>
                            </div>
                        ))}
                </div>
                <form action="" onSubmit={handleSubmit} className='w-1/2 flex flex-col gap-1 '>
                    <h1 className='text-center mb-5 text-green-500 font-semibold text-lg'>Add new Post </h1>
                    <input className='p-1.5 rounded-sm bg-transparent border-[1px] border-gray-600 font-semibold  block focus:border-green-500 outline-none  placeholder:text-green-500 active:border-green-600' type="text" placeholder='Title' />
                    <input className='p-1.5 rounded-sm bg-transparent border-[1px] border-gray-600 font-semibold  block focus:border-green-500 outline-none  placeholder:text-green-500 active:border-green-600' type="text" placeholder='Desc' />
                    <input className='p-1.5 rounded-sm bg-transparent border-[1px] border-gray-600 font-semibold  block focus:border-green-500 outline-none  placeholder:text-green-500 active:border-green-600' type="text" placeholder='Image' />
                    <textarea className='p-1.5 rounded-sm bg-transparent border-[1px] border-gray-600 font-semibold  block focus:border-green-500 outline-none  placeholder:text-green-500 active:border-green-600' placeholder='Content' cols="30" rows="10"></textarea>
                    <div className='flex justify-center'>
                        <button className='btn w-24'>Post</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Dashboard;