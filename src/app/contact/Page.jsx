import React from 'react';

const Contact = () => {
    return (
        <div>
            <center><h1 className='text-4xl font-semibold mt-16'>Let's keep in touch</h1></center>
            
            <div className='mt-16'>
                <div>
                    {/* <Image></Image> */}///
                </div>
                <div>
                    <form action="" className='flex flex-col gap-7'>
                        <input type="text" placeholder="Type here" className="input input-bordered border-gray-400 w-full max-w-md" />
                        <input type="text" placeholder="Type here" className="input input-bordered border-gray-400 w-full max-w-md" />
                        <textarea className=" max-w-md textarea  border-gray-400 " placeholder="Bio"></textarea>
                        <button className='bg-green-700 px-5 py-3 text-sm rounded-md w-32'>Send</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Contact;