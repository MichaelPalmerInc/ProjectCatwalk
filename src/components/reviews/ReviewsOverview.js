import React from 'react';
import { makeStyles } from '@material-ui/core';

import Breakdown from './Breakdown';
import ProductBreakdown from './ProductBreakdown';
import Rating from '../shared/Rating';
import { characteristicValues } from './Reviews';

/* Styles */

const useStyles = makeStyles({
  root: {},
  starRating: {
    display: 'flex',
    'margin-bottom': '2rem',
    '& .number': {
      'font-size': '5rem',
      'letter-spacing': '-5px',
      'line-height': '0.9',
      'margin-right': '1rem',
      'font-weight': 700,
    },
  },

  usersRecommend: {
    'text-align': 'justify-all',
    'text-justify': 'inter-word',
    width: '100%',
  },

  breakdownContainer: {
    'margin-bottom': '2rem',
  },
});

const averageRating = (ratingObj) => {
  let total = 0;
  let quantity = 0;
  for (let rating in ratingObj) {
    total += rating * ratingObj[rating];
    quantity += parseInt(ratingObj[rating]);
  }
  return Math.round((total * 10) / quantity) / 10;
};

/* Render */

const ReviewsOverview = (props) => {
  const classes = useStyles(props);
  const rating = averageRating(props.data.ratings);
  const total = props.data.total;
  const characteristicBreakdowns = [];
  for (let characteristic in props.data.characteristics) {
    characteristicBreakdowns.push(
      <ProductBreakdown
        name={characteristic}
        options={characteristicValues.overview[characteristic]}
        value={props.data.characteristics[characteristic].value}
      />
    );
  }
  return (
    <div className={`${classes.root} ${props.className}`}>
      <div className={classes.starRating}>
        <div className="number">{rating}</div>
        <Rating value={rating} precision={0.25} readOnly={true} color="black" />
      </div>
      <div className={classes.usersRecommend}>100% of reviews recommend this product</div>
      <div className={classes.breakdownContainer}>
        <Breakdown title="5 stars" percentage={props.data.ratings[5] / total} />
        <Breakdown title="4 stars" percentage={props.data.ratings[4] / total} />
        <Breakdown title="3 stars" percentage={props.data.ratings[3] / total} />
        <Breakdown title="2 stars" percentage={props.data.ratings[2] / total} />
        <Breakdown title="1 stars" percentage={props.data.ratings[1] / total} />
      </div>
      <div className={classes.productBreakdownContainer}>{characteristicBreakdowns}</div>
    </div>
  );
};

export default ReviewsOverview;
