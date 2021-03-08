import React from 'react';
import { makeStyles } from '@material-ui/core';

import Breakdown from './Breakdown';
import ProductBreakdown from './ProductBreakdown';
import Rating from '../shared/Rating';

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
  productBreakdownContainer: {},
});

/* Render */

const ReviewsOverview = (props) => {
  const classes = useStyles(props);
  return (
    <div className={`${classes.root} ${props.className}`}>
      <div className={classes.starRating}>
        <div className="number">3.5</div>
        <Rating value={3.5} precision={0.25} readOnly={true} color="black" />
      </div>
      <div className={classes.usersRecommend}>100% of reviews recommend this product</div>
      <div className={classes.breakdownContainer}>
        <Breakdown title="5 stars" percentage={90 / 104} />
        <Breakdown title="4 stars" percentage={10 / 104} />
        <Breakdown title="3 stars" percentage={0 / 104} />
        <Breakdown title="2 stars" percentage={0 / 104} />
        <Breakdown title="1 stars" percentage={4 / 104} />
      </div>
      <div className={classes.productBreakdownContainer}>
        <ProductBreakdown name="Size" options={['Too small', 'Perfect', 'Too large']} value={3} />
        <ProductBreakdown name="Comfort" options={['Poor', 'Perfect']} value={5} />
      </div>
    </div>
  );
};

export default ReviewsOverview;
