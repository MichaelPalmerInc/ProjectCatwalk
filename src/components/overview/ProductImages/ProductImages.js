import React, {useState, useEffect} from 'react';
import apiController from '../../../apiController.js'
import ProductCarousel from '../ProductCarousel/ProductCarousel.js'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ProductImages = ({products}) => {
  let productId = products.id;
  const getData = () => {
    apiController.getProductStyles(productId)
    .then(data => {
    const productStyles = data.data.results[0].photos[0].url;
    const imageArr = data.data.results[0].photos;
    setMainImage(productStyles);
    setAllImages(imageArr)
  })
  .catch(err => {
    console.error(err);
  })
}
  useEffect(() => {
    getData();
  }, [productId]);


  const [allImages, setAllImages] = useState([]);
  const [mainImage, setMainImage] = useState('');
  return (
    <div>
      {console.log('main image' ,mainImage)}
      {console.log(' all images ' ,allImages)}
      {/* The idea is that the img src here will be linked to the corresponding image in the carousel
        *I'll have to figure out css to get them to line up in the right place, but first, just get the pieces linking up for now.
         */}


<CarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={1000}
        totalSlides={allImages.length}
      >
        <Slider>
        {allImages.map((image, index)=> (
           <Slide index = {index}>
             <ImageWithZoom alt={"The style's name"} src={image.url}></ImageWithZoom>
             </Slide>

         ))}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default ProductImages;