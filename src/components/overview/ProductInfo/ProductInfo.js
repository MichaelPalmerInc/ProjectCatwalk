import React, { useState, useEffect } from 'react';
import AddToCart from '../AddToCart/AddToCart.js';
import StyleSelector from '../StyleSelector/StyleSelector.js';

const ProductInfo = ({ products }) => {
  const [price, setPrice] = useState('');
  const [skus, setSkus] = useState({});
  useEffect(() => {
    setPrice(products.default_price);
    // setSkus(products.results[0].skus)
  }, products.default_price);
  const handleTrigger = (newPrice, skus) => {
    setPrice(newPrice);
    setSkus(skus);
  };
  return (
    <div>
      {console.log(products)}
      <div> Reviews component Shared</div>
      <h3>{products ? products.category : ''}</h3>
      <h1>{products ? products.name : ''}</h1>
      <p>{products ? price : ''}</p>
      <StyleSelector products={products} onChange={handleTrigger} />
      <AddToCart skus={skus} />
    </div>
  );
};

export default ProductInfo;
