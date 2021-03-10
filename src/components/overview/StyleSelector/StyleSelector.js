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

  const handleClick = () => {
    console.log('Clicked');

  }

const [styles, setStyles] = useState([]);
return (
<div>
<p><em>Style ></em> Selected Style</p>
    <Grid container direction="row" alignItems="center" alignContent="center" justify ="center" spacing = {1}>
      {styles.map(style => (

        <Grid item xs = {3}>
        <Avatar onClick={handleClick} src={style.photos.thumbnail_url}></Avatar>
      </Grid>
      ))}
      {console.log( styles)}
    </Grid>
    </div>
)
};

export default StyleSelector;