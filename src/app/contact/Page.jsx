import React from 'react';
import contact from '../../../public/contact.png'
import Image from 'next/image';

export const metadata = {
    title: 'Contact',
    description: 'Hoga bois',
  }

const Contact = () => {
    return (
        <div>
            <center><h1 className='text-4xl font-semibold mt-16'>Let's keep in touch</h1></center>
            
            <div className='mt-16 flex items-center'>
                <div className='w-1/2'>
                <Image src={contact} className='w-8/12 animate-bounce'></Image>
                </div>
                <div className='w-1/2'>
                    <form action="" className='flex flex-col gap-7'>
                        <input type="text" placeholder="Type here" className="bg-black border-gray-400 font-bold text-sm border p-4 rounded" />
                        <input type="text" placeholder="Type here" className="bg-black border-gray-400 font-bold text-sm border p-4 rounded" />
                        <textarea className="bg-black border-gray-400 font-bold text-sm border p-4 rounded" placeholder="Bio"></textarea>
                        <button className='bg-green-700 px-5 py-3 text-sm rounded-md w-32'>Send</button>
                    </form>
                    {/* <form action="" className='flex flex-col gap-7'>
                        <input type="text" placeholder="Type here" className="input input-bordered border-gray-400 w-full max-w-md" />
                        <input type="text" placeholder="Type here" className="input input-bordered border-gray-400 w-full max-w-md" />
                        <textarea className=" max-w-md textarea  border-gray-400 " placeholder="Bio"></textarea>
                        <button className='bg-green-700 px-5 py-3 text-sm rounded-md w-32'>Send</button>
                    </form> */}
                </div>
            </div>
t

        </div>
    );
};

export default Contact;