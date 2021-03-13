import React, {useState, useEffect} from 'react'
import ProductInfo from './ProductInfo/ProductInfo.js';
import ProductCarousel from './ProductCarousel/ProductCarousel.js'
import ProductImages from './ProductImages/ProductImages.js'
import ProductDescription from './ProductDescription/ProductDescription.js'
import AddToCart from './AddToCart/AddToCart.js'

import { Grid } from '@material-ui/core';
import apiController from '../../apiController';


// move state to overview. Pass down products to each component as needed.
const Overview = ({productId})  => {

  const getData = () => {
    apiController.getProduct(productId)
    .then(data => {
      const productData = data.data;
      setProducts(productData);
    })
    .catch(err => {
      console.error(err);
    })
  }
  useEffect(() => {
    getData();
}, [productId]);

const [products, setProducts] = useState(false);
  //Api call to get the products array.
  return (
    <div>
      {console.log('the products', products)}
      <Grid container spacing = {1}>
        <Grid item xs = {6}>
      <div style={{width: "85%"}}>
        <ProductImages products ={products}/>

        <ProductCarousel/>
      </div>
      </Grid>
      <Grid item xs = {6}>
        <div style={{width: "45%"}}>
          <ProductInfo products = {products} />
        </div>
      </Grid>
      </Grid>
      <ProductDescription products = {products}/>
    </div>
  )
}

export default Overview;