import Image from 'next/image';
import React from 'react';


const About = () => {
    return (
        <div className='mt-16'>
            <div className='w-full h-64 relative'>
                <Image
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true} className='object-cover grayscale' />
                <div className='absolute bottom-3 left-5 bg-green-600 p-2 rounded'>
                    <h1 className='text-3xl font-semibold'>Digital Storytellers</h1>
                    <h2 className='text-md font-semibold'>Handcrafting award winning digital experience</h2>
                </div>
            </div>
            <div className='flex gap-10 mt-10'>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-bold mb-10'>
                        Who are We?
                    </h1>
                    <div className='flex flex-col gap-5'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, corrupti.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nobis ex dolore sapiente nostrum earum perferendis ab autem dolor et. Libero nulla a iste ex ducimus impedit rem, non explicabo sint, excepturi vero nemo nobis quod rerum et natus vel, exercitationem soluta repudiandae nam. Doloribus, aut! Commodi, similique. In, reiciendis?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, omnis illum! Voluptatibus illo quidem accusamus consectetur, asperiores rem laudantium voluptas nam a maiores, dolorum excepturi?
                        </p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-bold mb-10'>
                        Who are We?
                    </h1>
                    <div className='flex flex-col gap-5'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, corrupti.
                        </p>
                        <p>- Lorem ipsum dolor sit amet.</p>
                        <p>- Lorem ipsum dolor sit amet.</p>
                        <p>- Lorem ipsum dolor sit amet.</p>
                        <button className='bg-green-700 px-5 py-3 text-sm rounded-md w-32'>Contact</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;