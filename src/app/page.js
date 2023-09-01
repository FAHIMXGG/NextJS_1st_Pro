import Image from 'next/image'
import Hero from 'public/hero.png'


export default function Home() {
  return (
    <div>
      home
      <Image src={Hero} className='w-1/2'></Image>

      {/* <img src="https://cdn-icons-png.flaticon.com/512/6028/6028690.png" alt="" /> */}
      {/* <Image width={500} height={500} src="https://cdn-icons-png.flaticon.com/512/6028/6028690.png"></Image> */}
    </div>
    
  )
}
