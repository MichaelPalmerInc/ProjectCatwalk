import { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import PhotoList from '../shared/PhotoList';
import Rating from '../shared/Rating';
import apiController from '../../apiController';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    'grid-template-columns': '50% 50%',
    'grid-template-rows': 'auto',
    'grid-template-areas': `
      "rating userinfo"
      "title title"
      "content content"
      "helpful null"
    `,
    padding: '1rem 0',
    'margin-top': '1rem',
    'font-size': '.9rem',
    'border-bottom': '1px solid gray',
  },
  rating: {
    'grid-area': 'rating',
  },
  userinfo: {
    'grid-area': 'userinfo',
    'text-align': 'right',
  },
  title: {
    'grid-area': 'title',
    'font-weight': 'bold',
    'font-size': '1.4rem',
    padding: '1rem 0',
  },
  content: {
    'grid-area': 'content',
  },
  recommend: {
    'padding-top': '1.2rem',
    '&::before': {
      content: '"✓"',
      display: 'inline-block',
      height: 'auto',
      width: 'auto',
      'margin-right': '.5rem',
    },
  },
  response: {
    '&::before': {
      content: '"Response: "',
      display: 'block',
      'margin-bottom': '.7rem',
      'font-weight': 'bold',
    },
    padding: '1rem',
    background: '#ddd',
    'margin-bottom': '.7rem',
  },
  helpful: {
    'grid-area': 'helpful',
    '& a': {
      color: 'inherit',
      '&:hover': {
        color: 'black',
      },
    },
  },
});

const wordBreak = (input, maxLength = 75, seperator = ' ') => {
  if (input.length < maxLength) return [input];
  const breakpoint = input.lastIndexOf(seperator, maxLength);
  return [input.substr(0, breakpoint) + '...', '...' + input.substr(breakpoint)];
};

const dateString = (dateStringFromAPI) => {
  const date = new Date(dateStringFromAPI);
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
};

const Review = (props) => {
  const classes = useStyles(props);
  const title = wordBreak(props.summary);
  const [helpful, setHelpful] = useState(false);

  const markHelpful = (event) => {
    event.preventDefault();
    apiController.markHelpful(props.review_id).then((res) => {
      console.log(res);
      if (res.status === 204) setHelpful(true);
      props.refresh();
    });
  };
  return (
    <div className={`${props.className ? props.className : ''} ${classes.root}`}>
      <Rating className={classes.rating} value={props.rating} precision={0.25} readOnly={true} color="black" />
      <div className={classes.userinfo}>
        {props.reviewer_name}, {dateString(props.date)}
      </div>
      <div className={classes.title}>{title[0]}</div>
      <div className={classes.content}>
        {title[1] ? <p>{title[1]}</p> : ''}
        <p>{props.body}</p>
        {props.photos.length ? <PhotoList photos={props.photos} /> : ''}
        {props.recommend ? <p className={classes.recommend}>I recommend this product</p> : ''}
        {props.response ? <div className={classes.response}>{props.response}</div> : ''}
      </div>
      <div className={classes.helpful}>
        Helpful
        {helpful ? (
          ''
        ) : (
          <Fragment>
            ?{' '}
            <a href="#" onClick={markHelpful}>
              Yes
            </a>
          </Fragment>
        )}
        ({props.helpfulness}) | <a href="#">Report</a>
      </div>
    </div>
  );
};

export default Review;
