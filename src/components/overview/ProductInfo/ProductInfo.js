import React from 'react';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import AddToCart from '../AddToCart/AddToCart.js'


const ProductInfo = () => {
  return (
    <div>
      <div> Reviews component Shared</div>
      <h3>Category</h3>
      <h1>Product Name</h1>
      <p>Price</p>
      <p><em>Style ></em> Selected Style</p>
      <div>
      <Grid container direction="row" alignItems="center" alignContent="center" justify ="center" spacing = {1}>
        <Grid item xs = {3}>
          <Avatar>A</Avatar>
        </Grid>
        <Grid item xs = {3}>
          <Avatar>B</Avatar>
        </Grid>
        <Grid item xs = {3}>
          <Avatar>C</Avatar>
        </Grid>
        <Grid item xs = {3}>
          <Avatar>D</Avatar>
        </Grid>
        <Grid item xs = {3}>
          <Avatar>E</Avatar>
        </Grid>
        <Grid item xs = {3}>
          <Avatar>F</Avatar>
        </Grid>
      </Grid>
      </div>
      <AddToCart/>
    </div>
  )
}

export default ProductInfo;