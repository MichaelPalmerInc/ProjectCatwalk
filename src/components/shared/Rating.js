import React from 'react';
import { Rating as MaterialRating } from '@material-ui/lab';
import { StarBorderOutlined } from '@material-ui/icons';

const Rating = (props) => {
  return <MaterialRating {...props} emptyIcon={<StarBorderOutlined />} />;
};

export default Rating;
