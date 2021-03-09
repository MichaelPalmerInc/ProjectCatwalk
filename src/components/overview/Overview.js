import React from 'react'
import ProductInfo from './ProductInfo/ProductInfo.js';
import ProductDescription from './ProductDescription/ProductDescription.js'
import { Grid } from '@material-ui/core';



const Overview = ()  => {
  return (
    <div>
      <Grid container spacing = {1}>
        <Grid item xs = {6}>
      {/* <div style={{width: "85%"}}>
        <ProductImages/>
      </div> */}
      </Grid>
      <Grid item xs = {6}>
        <div style={{width: "45%"}}>
          <ProductInfo/>
        </div>
      </Grid>
      </Grid>
      <ProductDescription/>
    </div>
  )
}

export default Overview;