import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })

    if (!res.ok) {

        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const Blog = async () => {

    const data = await getData()
    return (
        <div>
            {
                data.map((item) => (
                    <Link href={`/blog/${item._id}`} key={item.id}>
                        <div className='mt-10 flex justify-between items-center gap-20'>
                            <div className='flex relative '>
                                <Image
                                    width={400}
                                    height={250}
                                    src={item.img}
                                    alt=""
                                />
                            </div>
                            <div className='flex flex-col gap-5 flex-1'>
                                <h1 className='text-2xl font-bold'>{item.title}</h1>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }


        </div>
    );
};

export default Blog;