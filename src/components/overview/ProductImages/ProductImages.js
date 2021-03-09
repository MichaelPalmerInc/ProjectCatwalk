import React from 'react';
import axios from 'axios';
import ProductCarousel from '../ProductCarousel/ProductCarousel.js'
const ProductImages = () => {
  return (
    <div>
      {/* The idea is that the img src here will be linked to the corresponding image in the carousel
        *I'll have to figure out css to get them to line up in the right place, but first, just get the pieces linking up for now.
         */}
      <img style={{width: "100%",height:"100%" }} alt={"The style's name"} src={'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'}></img>
    </div>
  )
}

export default ProductImages;