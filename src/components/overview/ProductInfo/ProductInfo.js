import React, { useState, useEffect } from 'react';
import AddToCart from '../AddToCart/AddToCart.js';
import StyleSelector from '../StyleSelector/StyleSelector.js';

const ProductInfo = ({ products }) => {
  const [price, setPrice] = useState(''); //do we need to keep track of the price?
  const [defaultPrice, setDefaultPrice] = useState('');
  const [skus, setSkus] = useState({});
  const [showPrice, setShowPrice] = useState('');

  useEffect(() => {
    setDefaultPrice(products.default_price);
    setShowPrice(<p>${products.default_price}</p>)
    // setSkus(products.results[0].skus)
  }, [products.default_price]);


  const handleTrigger = (newPrice, skus) => {
    setPrice(newPrice);
    if (newPrice < defaultPrice) {
      setShowPrice(<p>
        <span style = {{textDecoration: 'line-through'}}>${defaultPrice}</span> <span style = {{color: 'red'}}> ${newPrice}</span>
        </p>);
    } else {
      setShowPrice(<p>${newPrice}</p>);
    }
    setSkus(skus);
  };

  return (
    <div>
      {console.log(products)}
      <div> Reviews component Shared</div>
      <h3>{products ? products.category : ''}</h3>
      <h1>{products ? products.name : ''}</h1>
      {showPrice}
      <StyleSelector products={products} onChange={handleTrigger} />
      <AddToCart skus={skus} />
    </div>
  );
};

export default ProductInfo;
