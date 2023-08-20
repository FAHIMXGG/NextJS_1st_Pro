import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>
        All right reserved X
      </div>
      <div>
        <Image src="/1.jpg" width={150} height={150}></Image>
      </div>
    </div>
  )
}

export default Footer
