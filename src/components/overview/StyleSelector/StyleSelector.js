import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import apiController from '../../../apiController';

const StyleSelector = ({ products, onChange }) => {
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(0);

  let productId = products.id;
  const getData = () => {
    apiController
      .getProductStyles(productId)
      .then((data) => {
        setStyles(data.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getData();
  }, [productId]);

  useEffect(() => {
    if (styles.length !== 0) {
      handleClick(0);
    }
  }, [styles]);

  const handleClick = (styleId) => {
    setSelectedStyle(styleId);
    if (styles[styleId].sale_price === null) {
      onChange(styles[styleId].original_price, styles[styleId].skus, styleId);
    } else {
      onChange(styles[styleId].sale_price, styles[styleId].skus);
    }
  };

  return (
    <div>
      <p>
        <em>Style ></em> {styles[selectedStyle] ? styles[selectedStyle].name : ''}
      </p>
      {console.log(styles)}
      <Grid container direction="row" alignItems="center" alignContent="center" justify="center" spacing={1}>
        {styles.map((style, index) => (
          <Grid item xs={3}>
            <Avatar
              onClick={(event) => {
                handleClick(index);
              }}
              src={style.photos[0] ? style.photos[0].thumbnail_url : ''}
            ></Avatar>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StyleSelector;
