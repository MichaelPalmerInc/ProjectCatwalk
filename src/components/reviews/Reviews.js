import React, { useState, useEffect } from 'react';
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
  const [reviews, setReviews] = useState([]);
  const [reviewsByRelevance, setReviewsByRelevance] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [nextReviewsPage, setReviewsPage] = useState(1);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewMetaData, setReviewMetaData] = useState(exampleMetaData);
  const [metaLoading, setMetaLoading] = useState(true);
  const [filters, setFilters] = useState(new Array(5).fill(false));
  const [sort, setSort] = useState('relevant');
  const productId = props.productId || exampleProductId;
  const classes = useStyles(props);

  const fetchCurrentReviews = () => {
    setReviewsLoading(true);
    apiController
      .getReviews(productId, { count: 100 * nextReviewsPage, sort: 'relevant', pages: 1 })
      .then((results) => {
        setReviewsByRelevance(results.data.results);
        setReviewsPage(2);
        setReviewsLoading(false);
      });
  };

  const fetchMoreReviews = () => {
    setReviewsLoading(true);
    apiController.getReviews(productId, { count: 100, sort: 'relevant', pages: nextReviewsPage }).then((results) => {
      setReviewsByRelevance(reviewsByRelevance.concat(results.data.results));
      setReviewsPage(nextReviewsPage + 1);
      setReviewsLoading(false);
    });
  };

  const fetchMetadata = () => {
    setMetaLoading(true);
    apiController.getReviewMetaData(productId).then((results) => {
      const total = ratingCount(results.data.ratings);
      results.data.total = total;
      setReviewMetaData(results.data);
      setMetaLoading(false);
    });
  };

  const toggleFilter = (rating) => {
    const newFilters = [...filters];
    newFilters[rating - 1] = !newFilters[rating - 1];
    console.log('filters: ', newFilters);
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters(new Array(5).fill(false));
  };

  useEffect(() => {
    setReviewsPage(1);
    setFilters(new Array(5).fill(false));
    setReviews([]);
    setReviewMetaData(exampleMetaData);
    fetchMoreReviews();
    fetchMetadata();
  }, [productId]);

  // Automatically sort the reviews into the proper order whenever new reviews are fetched or the user selects
  // a different sorting option.
  useEffect(() => {
    let sortedReviews = [...reviewsByRelevance];
    switch (sort) {
      case 'helpful':
        sortedReviews.sort((a, b) => b.helpfulness - a.helpfulness);
        break;
      case 'newest':
        sortedReviews.sort((a, b) => b.date.localeCompare(a.date));
        break;
      case 'relevant':
      default:
        break;
    }
    setReviews(sortedReviews);
  }, [sort, reviewsByRelevance]);

  // Automatically filter reviews when necessary
  useEffect(() => {
    if (!filters.reduce((acc, filter) => acc || filter, false)) {
      setFilteredReviews(reviews);
    } else {
      let filtered = reviews.filter((review) => filters[review.rating - 1]);
      setFilteredReviews(filtered);
    }
  }, [filters, reviews]);

  return (
    <div className={classes.root}>
      <h6 className={classes.title}>Ratings & Reviews</h6>
      <ReviewsOverview
        className={classes.left}
        data={reviewMetaData}
        loading={metaLoading}
        filters={filters}
        toggleFilter={toggleFilter}
        clearFilters={clearFilters}
      />
      <ReviewsList
        refresh={fetchCurrentReviews}
        className={classes.right}
        data={filteredReviews}
        loading={reviewsLoading}
        meta={reviewMetaData}
        productId={productId}
        setSort={setSort}
        sort={sort}
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
