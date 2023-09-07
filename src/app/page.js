import Image from 'next/image'
import Hero from 'public/hero.png'
import css from './customCss/custom.css'


export default function Home() {
  return (
    <div>
      <div className='flex items-center justify-between mt-20 '>
        <div className='flex flex-col gap-10'>
            <h1 className='text-5xl ctext font-bold '>Lorem ipsum, dolor sit <br /> amet consectetur  adipisicing <br /> elit. br Maxime, saepe.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, <br /> pariatur! Aspernatur saepe voluptates eveniet sint!</p>
            <div>
              <button className='bg-green-700 px-5 py-3 text-sm rounded-md'>See Our Works</button>
            </div>
        </div>
        <div className='w-5/12'>
          <Image src={Hero} className='flex img'></Image>
        </div>
      </div>


      {/* <img src="https://cdn-icons-png.flaticon.com/512/6028/6028690.png" alt="" /> */}
      {/* <Image width={500} height={500} src="https://cdn-icons-png.flaticon.com/512/6028/6028690.png"></Image> */}
    </div>

  )
}
