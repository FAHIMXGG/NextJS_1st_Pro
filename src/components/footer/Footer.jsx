import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between '>
      <div>
        All right reserved X
      </div>
      <div>
        <Image src="/1.jpg" width={50} height={50}></Image>
      </div>
    </div>
  )
}

export default Footer
