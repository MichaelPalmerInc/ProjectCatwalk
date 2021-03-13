import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import apiController from '../../apiController';
import ReviewsOverview from './ReviewsOverview';
import ReviewsList from './ReviewsList';

/* Styles */

const useStyles = makeStyles({
  root: {
    display: 'grid',
    'max-height': '100vh',
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

const ratingCount = (ratingObj) => {
  let total = 0;
  for (let rating in ratingObj) {
    total += parseInt(ratingObj[rating]);
  }
  return total;
};

const Reviews = (props) => {
  const [reviews, changeReviews] = useState([]);
  const [nextReviewsPage, changeReviewsPage] = useState(1);
  const [reviewsLoading, changeReviewsLoading] = useState(true);
  const [reviewMetaData, changeReviewMetaData] = useState(exampleMetaData);
  const [metaLoading, changeMetaLoading] = useState(true);
  const [sort, changeSort] = useState('relevant');
  const productId = props.productId || exampleProductId;
  const classes = useStyles(props);

  const fetchCurrentReviews = () => {
    changeReviewsLoading(true);
    apiController.getReviews(productId, { count: 100 * nextReviewsPage, sort: sort, pages: 1 }).then((results) => {
      changeReviews(results.data.results);
      changeReviewsPage(2);
      changeReviewsLoading(false);
    });
  };

  const fetchMoreReviews = () => {
    changeReviewsLoading(true);
    apiController.getReviews(productId, { count: 100, sort: sort, pages: nextReviewsPage }).then((results) => {
      changeReviews(reviews.concat(results.data.results));
      changeReviewsPage(nextReviewsPage + 1);
      changeReviewsLoading(false);
    });
  };

  const fetchMetadata = () => {
    changeMetaLoading(true);
    apiController.getReviewMetaData(productId).then((results) => {
      const total = ratingCount(results.data.ratings);
      results.data.total = total;
      changeReviewMetaData(results.data);
      changeMetaLoading(false);
    });
  };

  useEffect(() => {
    changeReviewsPage(1);
    changeReviews([]);
    changeReviewMetaData(exampleMetaData);
    fetchMoreReviews();
    fetchMetadata();
  }, [productId]);

  return (
    <div className={classes.root}>
      <h6 className={classes.title}>Ratings & Reviews</h6>
      <ReviewsOverview className={classes.left} data={reviewMetaData} loading={metaLoading} />
      <ReviewsList
        refresh={fetchCurrentReviews}
        className={classes.right}
        data={reviews}
        loadMore={reviews.length < (nextReviewsPage - 1) * 2 ? null : fetchMoreReviews}
        loading={reviewsLoading}
        meta={reviewMetaData}
        productId={productId}
      />
    </div>
  );
};

export default Reviews;

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

const exampleProductId = 21114;

const exampleMetaData = {
  product_id: exampleProductId,
  ratings: {
    2: '2',
    4: '2',
    5: '5',
  },
  recommended: {
    false: '2',
    true: '7',
  },
  characteristics: {
    Fit: {
      value: '3.1111111111',
    },
    Length: {
      value: '3.111111111111111',
    },
    Comfort: {
      value: '4',
    },
    Quality: {
      value: '3.2',
    },
  },
};
