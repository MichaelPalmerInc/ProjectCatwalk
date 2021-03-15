import React, { useState, useEffect } from 'react';
import AddToCart from '../AddToCart/AddToCart.js';
import StyleSelector from '../StyleSelector/StyleSelector.js';
const ProductInfo = ({ products, onChange}) => {
  const [price, setPrice] = useState(''); //do we need to keep track of the price?
  const [defaultPrice, setDefaultPrice] = useState('');
  const [skus, setSkus] = useState({});
  const [showPrice, setShowPrice] = useState('');


  useEffect(() => {
    setDefaultPrice(products.default_price);
    setShowPrice(<p>${products.default_price}</p>)
    // setSkus(products.results[0].skus)
  }, [products.default_price]);


  const handleTrigger = (newPrice, skus, index) => {
    setPrice(newPrice);
    if (newPrice < defaultPrice) {
      setShowPrice(<p>
        <span style = {{textDecoration: 'line-through'}}>${defaultPrice}</span> <span style = {{color: 'red'}}> ${newPrice}</span>
        </p>);
    } else {
      setShowPrice(<p>${newPrice}</p>);
    }
    setSkus(skus);
    onChange(index);
  };

  return (
    <div>
      {console.log(products)}
      <div>
      </div>
      <h5>{products ? products.category : ''}</h5>
      <h4>{products ? products.name : ''}</h4>
      {showPrice}
      <StyleSelector products={products} onChange={handleTrigger} />
      <AddToCart skus={skus} />
    </div>
  );
};

export default ProductInfo;
