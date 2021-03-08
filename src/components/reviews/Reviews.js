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

export const characteristicValues = {
  overview: {
    Size: ['Too small', 'Perfect', 'Too large'],
    Width: ['Too narrow', 'Perfect', 'Too Wide'],
    Comfort: ['Poor', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Too short', 'Perfect', 'Too long'],
    Fit: ['Too tight', 'Perfect', 'Too loose'],
  },
  newReview: {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'],
  },
};
/* Render */

const exampleProductId = 21114;

const Reviews = (props) => {
  const [reviews, changeReviews] = useState({ empty: true });
  const [reviewMetaData, changeReviewMetaData] = useState({ empty: true });
  useEffect(() => {
    const productId = props.productId || exampleProductId;
    apiController.getReviews(productId).then((results) => changeReviews(results.data.results));
    apiController.getReviewMetaData(productId).then((results) => changeReviewMetaData(results.data));
  }, [props.productId]);
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <h6 className={classes.title}>Ratings & Reviews</h6>
      {!reviewMetaData.empty ? <ReviewsOverview className={classes.left} data={reviewMetaData} /> : ''}
      {!reviews.empty ? <ReviewsList className={classes.right} data={reviews} /> : ''}
    </div>
  );
};

export default Reviews;
