import Image from 'next/image'
import React from 'react'
import css from '../../customCss/custom.css'
import { items } from "./data.js"
import { notFound } from 'next/navigation'


const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }
  return notFound()
}

const Category = ({ params }) => {
  //console.log(params)
  const data = getData(params.category)
  return (
    <div>
      <h1 className='text-xl font-semibold text-green-400 '>{params.category}</h1>
      {
        data.map((item) => (
          <div className='mt-10 flex justify-between items-center rev gap-20' key={item.id}>
            <div className='flex flex-col gap-5 flex-1'>
              <h1 className='text-2xl font-bold'>{item.title}</h1>
              <p>{item.desc}</p>
              <button className='bg-green-700 px-5 py-3 text-sm rounded-md w-32'>See More</button>
            </div>
            <div className='flex relative h-[500px] flex-1'>
              <Image
                className="object-cover"
                fill={true}
                src={item.image}
                alt=""
              />
            </div>
          </div>
        ))
      }
      {/* <div className='mt-10 flex justify-between items-center rev gap-20'>
        <div className='flex flex-col gap-5 flex-1'>
          <h1 className='text-2xl font-bold'>Test</h1>
          <p>des</p>
          <button className='bg-green-700 px-5 py-3 text-sm rounded-md w-32'>See More</button>
        </div>
        <div className='flex relative h-[500px] flex-1'>
        <Image
              className="object-cover"
              fill={true}
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
            />
        </div>
      </div>
      <div className='mt-10 flex justify-between items-center rev gap-20'>
        <div className='flex flex-col gap-5 flex-1'>
          <h1 className='text-2xl font-bold'>Test</h1>
          <p>des</p>
          <button className='bg-green-700 px-5 py-3 text-sm rounded-md w-32'>See More</button>
        </div>
        <div className='flex relative h-[500px] flex-1'>
        <Image
              className="object-cover"
              fill={true}
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
            />
        </div>
      </div>
      <div className='mt-10 flex justify-between items-center rev gap-20'>
        <div className='flex flex-col gap-5 flex-1'>
          <h1 className='text-2xl font-bold'>Test</h1>
          <p>des</p>
          <button className='bg-green-700 px-5 py-3 text-sm rounded-md w-32'>See More</button>
        </div>
        <div className='flex relative h-[500px] flex-1'>
        <Image
              className="object-cover"
              fill={true}
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
            />
        </div>
      </div> */}
    </div>
  )
}

export default Category
