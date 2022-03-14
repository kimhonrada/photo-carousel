import React from 'react';
import ImageSlider from './Components/ImageSlider/ImageSlider'
import { SliderData } from './assets/images/SliderData.js'


const App = () => {
  return (
    <>
      <h1>Photo Carousel</h1>
      <ImageSlider slides={SliderData} />
    </>
  )
}

export default App;