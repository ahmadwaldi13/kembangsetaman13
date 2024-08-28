'use client'

import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  }

  const slideData = [
    {
      id: 0,
      img: '/banner1.png',
    },
    {
      id: 1,
      img: '/banner2.png',
    },
    {
      id: 2,
      img: '/banner3.png',
    },
  ]
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide key={item.id} img={item.img} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
