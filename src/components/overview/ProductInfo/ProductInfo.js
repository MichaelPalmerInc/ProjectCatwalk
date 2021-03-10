import React, {useState,useEffect} from 'react';
import AddToCart from '../AddToCart/AddToCart.js'
import StyleSelector from '../StyleSelector/StyleSelector.js'
import apiController from '../../../apiController'

const ProductInfo = (prop) => {
  const getData = () => {
    apiController.getProduct(21112)
    .then(data => {
      const productData = data.data;
      getProducts(productData);
    })
    .catch(err => {
      console.error(err);
    })
  }
  useEffect(() => {
    getData();
}, []);

const [products, getProducts] = useState(false);
  return (
    <div>
      <div> Reviews component Shared</div>
      <h3>{products ? products.category:''}</h3>
      <h1>{products ? products.name:''}</h1>
      <p>{products ? products.default_price:''}</p>
      <StyleSelector/>
      <AddToCart/>
    </div>
  )
}

export default ProductInfo;