import React, {useState, useEffect} from 'react';
import AddToCart from '../AddToCart/AddToCart.js'
import StyleSelector from '../StyleSelector/StyleSelector.js'

const ProductInfo = ({products}) => {

  const [price, setPrice] = useState('');
  useEffect(() => {
    setPrice(products.default_price);
}, products.default_price);
  const handleTrigger = (newPrice) => {
    setPrice(newPrice);
  }
  return (
    <div>
      {console.log(products.default_price)}
      <div> Reviews component Shared</div>
      <h3>{products ? products.category:''}</h3>
      <h1>{products ? products.name:''}</h1>
      <p>{products ? price:''}</p>
      <StyleSelector products = {products} onChange = {handleTrigger}/>
      <AddToCart/>
    </div>
  )
}

export default ProductInfo;