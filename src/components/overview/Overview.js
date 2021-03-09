import React from 'react'
import axios from 'axios';
import ProductImages from './ProductImages/ProductImages.js';
import ProductInfo from './ProductInfo/ProductInfo.js';
import ProductCarousel from './ProductCarousel/ProductCarousel.js'
import AddToCart from './AddToCart/AddToCart.js'
import { Grid } from '@material-ui/core';



const Overview = ()  => {
  return (
    <div>
      <Grid container spacing = {1}>
        <Grid item xs = {6}>
      <div style={{width: "85%"}}>
        <ProductImages/>
        <ProductCarousel/>
      </div>
      </Grid>
      <Grid item xs = {6}>
        <div style={{width: "45%"}}>
          <ProductInfo/>
        </div>

      </Grid>
      </Grid>
    </div>
  )
}

export default Overview;