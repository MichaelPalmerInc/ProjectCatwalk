import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import apiController from '../../apiController';
import ReviewsOverview from './ReviewsOverview';
import ReviewsList from './ReviewsList';

/* Styles */

const useStyles = makeStyles({
  root: {
    display: 'grid',
    'grid-template-columns': '19.75rem auto',
    'grid-template-rows': 'auto',
    'grid-template-areas': `
      'title title'
      'left right'`,
    'grid-column-gap': '4rem',
  },
  title: {
    'text-transform': 'uppercase',
    'grid-area': 'title',
  },
  left: {
    'grid-area': 'left',
  },
  right: {
    'grid-area': 'right',
  },
});

/* Render */

const exampleProductId = 21112;

const Reviews = (props) => {
  const [reviews, changeReviews] = useState([]);
  const [reviewMetaData, changeReviewMetaData] = useState([]);
  useEffect(() => {
    const productId = props.productId || exampleProductId;
    apiController.getReviews(productId).then((results) => console.log('Reviews: ', results));
    apiController.getReviewMetaData(productId).then((results) => console.log('MetaData: ', results));
  }, [props.productId]);
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <h6 className={classes.title}>Ratings & Reviews</h6>
      <ReviewsOverview className={classes.left} />
    </div>
  );
};

export default Reviews;
