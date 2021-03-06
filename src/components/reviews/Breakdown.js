import React from 'react';
import { makeStyles } from '@material-ui/core';

/* Styles */

const useStyles = makeStyles({
  root: {
    display: 'grid',
    'grid-template-columns': '3.3125rem auto',
    'grid-template-rows': 'auto',
    'column-gap': '0.4rem',
    'justify-items': 'right',
    'align-items': 'center',
    margin: '10px 0',
    cursor: (props) => (props.onClick ? 'pointer' : 'inherit'),
  },
  title: {
    'text-decoration': 'underline',
  },
  bar: {
    position: 'relative',
    width: '100%',
    height: '0.6rem',
    'background-color': '#eee',
  },
  filled: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '0.6rem',
    'background-color': 'green',
  },
});

const Breakdown = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root} onClick={props.onClick}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.bar}>
        <div className={classes.filled} style={{ width: (props.percentage ? props.percentage : 0) * 100 + '%' }}></div>
      </div>
    </div>
  );
};

export default Breakdown;
