import Link from 'next/link';
import React from 'react';


const Portfolio = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-xl font-semibold mb-5'>Choose a gallery</h1>
            <div className='flex gap-10'>
                <Link href="/portfolio/illustrations" className='border-2 rounded-md border-[#bbb] h-96 w-80 relative bg-[url("https://cdn.discordapp.com/attachments/1094651413235253289/1149707261078421595/illustration.png")] bg-cover hover:text-green-400'><span className='absolute bottom-4 right-4 font-bold text-xl'>Illustrations</span></Link>
                <Link href="/portfolio/illustrations" className='border-2 rounded-md border-[#bbb] h-96 w-80 relative bg-[url("https://cdn.discordapp.com/attachments/1094651413235253289/1149707283027210290/websites.jpg")] bg-cover hover:text-green-400'><span className='absolute bottom-4 right-4 font-bold text-xl'>Websites</span></Link>
                <Link href="/portfolio/illustrations" className='border-2 rounded-md border-[#bbb] h-96 w-80 relative bg-[url("https://cdn.discordapp.com/attachments/1094651413235253289/1149707265696346173/apps.jpg")] bg-cover hover:text-green-400'><span className='absolute bottom-4 right-4 font-bold text-xl'>Applications</span></Link>
            </div>
        </div>
    );
};

export default Portfolio;