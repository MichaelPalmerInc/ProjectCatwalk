import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
const exampleReviewData = [
  {
    title: 'Review title with word-break truncation to prevent wrapping onto the next line, if necessary.',
    rating: 5,
    recommend: false,
    user: {
      name: 'User1234',
      verified: true,
    },
    date: 'January 1, 2019',
    helpful: 10,
    content:
      'Donut gummi bears gingerbread gummies chocolate. Ice cream apple pie tiramisu fruitcake chupa chups icing apple pie. Lemon drops cake pudding pudding.',
  },
  {
    title: 'Donut chocolate bar pudding.',
    rating: 2.75,
    recommend: true,
    user: {
      name: 'Cognito',
      verified: false,
    },
    date: 'April 2, 2019',
    helpful: 9,
    content: 'Lollipop marshmallow cotton candy. Chocolate bar gingerbread sweet carrot cake.',
    response: 'Marzipan danish jelly beans gummi bears apple pie cheesecake topping biscuit sesame snaps.',
  },
];
const Reviews = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <h6 className={classes.title}>Ratings & Reviews</h6>
      <ReviewsOverview className={classes.left} />
      <ReviewsList className={classes.right} data={exampleReviewData} />
    </div>
  );
};

export default Reviews;
