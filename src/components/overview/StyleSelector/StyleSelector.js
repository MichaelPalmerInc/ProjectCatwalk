import React, {useState,useEffect} from 'react';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import apiController from '../../../apiController'


const StyleSelector = ({products, onChange}) => {
  let productId = products.id || 2111;
  const getData = () => {
    apiController.getProductStyles(productId)
    .then(data => {
    const productStyles = data.data.results;
    setStyles(productStyles);
  })
  .catch(err => {
    console.error(err);
  })
}
  useEffect(() => {
    getData();
  }, [productId]);

  const handleClick = (styleId) => {
    setSelectedStyle(styleId);
    if(styles[styleId].sale_price === null) {
      onChange(styles[styleId].original_price, styles[styleId].skus );
    } else {
      onChange(styles[styleId].sale_price, styles[styleId].skus);
    }
  }

const [styles, setStyles] = useState([]);
const [selectedStyle, setSelectedStyle] = useState(0);

return (
<div>
<p><em>Style ></em> {styles[selectedStyle] ? styles[selectedStyle].name:''}</p>
{console.log(styles)}
    <Grid container direction="row" alignItems="center" alignContent="center" justify ="center" spacing = {1}>
      {styles.map((style,index) => (
        <Grid item xs = {3}>
        <Avatar onClick={(event) => {
          handleClick(index);
        }} src={style.photos.thumbnail_url}></Avatar>
      </Grid>
      ))}
    </Grid>
    </div>
)
};

export default StyleSelector;