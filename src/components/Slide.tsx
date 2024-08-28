import React from 'react'
import Image from 'next/image'

interface propsType {
  img: string
}

const Slide: React.FC<propsType> = ({ img }) => {
  return (
    <div className="outline-none border-none relative">
      <Image
        className="w-[100%] h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] rounded-xl object-cover object-center"
        src={img}
        alt="banner"
        layout="responsive"
        width={2000}
        height={1000}
      />
    </div>
  )
}

export default Slide
