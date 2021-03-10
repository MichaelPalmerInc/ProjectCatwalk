import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    'margin-bottom': '1rem',
  },
  title: {},
  bar: {
    height: '0.6rem',
    background: '#eee',
    width: '100%',
  },
  barContainer: {
    display: 'grid',
    position: 'relative',
    'margin-top': '0.5rem',
    'margin-bottom': '0.5rem',
    'grid-template-columns': (props) =>
      props.options.length === 2 ? '20% calc(60% - 0.6rem) 20%' : 'repeat(3, calc(33.33% - 0.2rem))',
    'column-gap': '0.3rem',
  },
  pointer: {
    position: 'absolute',
    top: '-1.25rem',
    'margin-left': '-1.25rem',
    'font-size': '2.5rem',
    'line-height': 1,
  },
  subTitleContainer: {
    display: 'grid',
    'grid-template-columns': (props) => (props.options.length === 2 ? '50% 50%' : 'repeat(3, 33.33%)'),
    'font-size': '0.8rem',
    'font-weight': 'var(--font-weight-light)',
  },
  subTitle: {
    'text-align': 'center',
    '&:first-child': {
      'text-align': 'left',
    },
    '&:last-child': {
      'text-align': 'right',
    },
  },
});

const ProductBreakdown = (props) => {
  const classes = useStyles(props);
  const percent = ((props.value - 1) / 4) * 100;
  let tmp = ['', '', ''];
  const bars = tmp.map((e, i) => {
    return <div key={i} className={`${classes.bar} bar${i}`}></div>;
  });
  return (
    <div className={classes.root}>
      <div className={classes.title}>{props.name}</div>
      <div className={classes.barContainer}>
        {bars}
        <div className={classes.pointer} style={{ left: percent + '%' }}>
          <ArrowDropDown style={{ fontSize: 'inherit' }} />
        </div>
      </div>
      <div className={classes.subTitleContainer}>
        {props.options.map((option) => (
          <div className={classes.subTitle}>{option}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductBreakdown;
