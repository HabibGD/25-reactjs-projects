import React, { useState } from 'react'
import Star from './Components/Star/Star'
import Slide from './Components/Star/ImagesSlider/Slide'

function App() {

  return (
    <>
      {/* <Star /> */}
      
      <section className='images-section'>
        <Slide url="https://picsum.photos/v2/list/" limit="10" page="1" />
      </section>
      
    </>
  )
}

export default App