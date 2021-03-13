import React, {useState, useEffect} from 'react';
import apiController from '../../../apiController.js'
import ProductCarousel from '../ProductCarousel/ProductCarousel.js'
const ProductImages = ({products}) => {
  let productId = products.id || 21111;
  const getData = () => {
    apiController.getProductStyles(productId)
    .then(data => {
    const productStyles = data.data.results[0].photos[0].url;
    setMainImage(productStyles);
  })
  .catch(err => {
    console.error(err);
  })
}
  useEffect(() => {
    getData();
  }, [productId]);

  const [allImages, setAllImages] = useState('');
  const [mainImage, setMainImage] = useState('');
  return (
    <div>
      {console.log('main image' ,mainImage)}
      {/* The idea is that the img src here will be linked to the corresponding image in the carousel
        *I'll have to figure out css to get them to line up in the right place, but first, just get the pieces linking up for now.
         */}
      <img style={{width: "100%",height:"100%" }} alt={"The style's name"} src={mainImage}></img>
    </div>
  )
}

export default ProductImages;