import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './imageSlider.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  return (
    <>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      <section className='slider'>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={index === current ? 'slide active' : 'slide'}>
              {index === current && (<img className='image' src={slide.image} alt='random pictures' />)}

            </div>
          )
        })}
      </section>
    </>

  )
}

export default ImageSlider;