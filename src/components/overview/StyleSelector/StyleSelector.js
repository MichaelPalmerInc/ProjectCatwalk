import React, {useState,useEffect} from 'react';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import apiController from '../../../apiController'


const StyleSelector = () => {
  const getData = () => {
    apiController.getProductStyles(21112)
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
  }, []);

  const handleClick = (styleId) => {
    console.log('Clicked');
    setSelectedStyle(styleId);
  }

const [styles, setStyles] = useState([]);
const [selectedStyle, setSelectedStyle] = useState(0);

return (
<div>
<p><em>Style ></em> {styles[selectedStyle] ? styles[selectedStyle].name:''}</p>
    <Grid container direction="row" alignItems="center" alignContent="center" justify ="center" spacing = {1}>
      {styles.map((style,index) => (

        <Grid item xs = {3}>
        <Avatar onClick={(event) => {
          handleClick(index);
        }} src={style.photos.thumbnail_url}></Avatar>
      </Grid>
      ))}
      {console.log( styles)}
    </Grid>
    </div>
)
};

export default StyleSelector;