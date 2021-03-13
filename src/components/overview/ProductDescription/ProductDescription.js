import React, {useState, useEffect} from 'react';

const ProductDescription = ({products}) => {

//   const [description, setDescription] = useState('');
//   const [features, setFeatures] = useState([]);

//   useEffect(() => {
//     setDescription(products.description);
//     setFeatures(products.features)
// }, products);

  return (
    <div>
      <div>
       {products ? products.description : ''}
     </div>

    </div>

  )
}

export default ProductDescription;