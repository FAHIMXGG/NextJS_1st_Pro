"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';
import useSWR from 'swr'

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
    const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

    console.log(data)


    if (session.status === "loading") {
        return <p>Loading...</p>
    }
    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    const handleSubmit = async (e) => {
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
        } catch (err) {
            console.log(err)
        }
    }

    //console.log(data)
    if (session.status === "authenticated") {
        return (
            <div>
                {/* //post */}
                <div>
                    {isLoading ? "loading" :
                    data?.map((post) => (
                        <div key={post._id}>
                            <div>
                                <Image src={post.img} width={200} height={150} alt="" ></Image>
                            </div>
                            <h2>{post.title}</h2>
                            <span>X</span>
                        </div>
                    ))}
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Add new Post</h1>
                    <input type="text" placeholder='Title' />
                    <input type="text" placeholder='Desc' />
                    <input type="text" placeholder='Image' />
                    <textarea placeholder='content' cols="30" rows="10"></textarea>
                    <button>Post</button>
                </form>
            </div>
        );
    }
};

export default Dashboard;