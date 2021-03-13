import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AddReviewModal from './AddReviewModal';
import Review from './Review';

const useStyles = makeStyles((theme) => ({
  root: {},
  count: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  sortDropdown: {
    border: 'none',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    fontFamily: 'inherit',
    borderBottom: '2px solid',
    borderColor: theme.palette.primary.main,
    lineHeight: 1,
    padding: 0,
    paddingRight: '1rem',
    boxSizing: 'border-box',
    color: theme.palette.primary.main,
    '&:focus': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      boxSizing: 'border-box',
    },
  },
  reviewList: {
    maxHeight: '75vh',
    overflowY: 'auto',
  },
  buttons: {
    marginTop: '1.5rem',
    display: 'flex',
    '& button': {
      marginRight: '0.75rem',
    },
  },
}));

const ReviewsList = (props) => {
  const classes = useStyles(props);
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewsShowing, setReviewsShowing] = useState(2);

  const addReview = (event) => {
    setModalOpen(true);
  };
  const closeModal = (event) => {
    setModalOpen(false);
  };
  return (
    <div className={`${props.className}`}>
      <div className={classes.count}>
        {props.data.length} Reviews, sorted by{' '}
        <select className={classes.sortDropdown}>
          <option selected>relevance</option>
        </select>
      </div>
      <div className={classes.reviewList}>
        {props.data
          .map((review) => <Review refresh={props.refresh} {...review} />)
          .filter((v, i) => i < reviewsShowing)}
      </div>
      <div className={classes.buttons}>
        {reviewsShowing < props.data.length ? (
          <Button variant="text" color="primary" onClick={() => setReviewsShowing(reviewsShowing + 2)}>
            More Reviews
          </Button>
        ) : (
          ''
        )}
        <Button variant="contained" color="primary" onClick={addReview}>
          Add Review
        </Button>
      </div>
      <AddReviewModal
        productId={props.productId}
        open={modalOpen}
        onClose={closeModal}
        characteristics={props.meta.characteristics}
      />
    </div>
  );
};

export default ReviewsList;
