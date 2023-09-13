import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <Link href="blog/testId">
                <div className='mt-10 flex justify-between items-center gap-20'>

                    <div className='flex relative '>
                        <Image

                            width={400}
                            height={250}
                            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                            alt=""
                        />
                    </div>
                    <div className='flex flex-col gap-5 flex-1'>
                        <h1 className='text-2xl font-bold'>Test</h1>
                        <p>des</p>
                       
                    </div>
                </div>
            </Link>
            <Link href="blog/testId">
                <div className='mt-10 flex justify-between items-center gap-20'>

                    <div className='flex relative '>
                        <Image

                            width={400}
                            height={250}
                            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                            alt=""
                        />
                    </div>
                    <div className='flex flex-col gap-5 flex-1'>
                        <h1 className='text-2xl font-bold'>Test</h1>
                        <p>des</p>
                        
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Blog;