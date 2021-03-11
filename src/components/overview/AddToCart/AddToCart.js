import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Grid } from '@material-ui/core';


const AddToCart = ({skus}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  return (
    <div>
    <div>
      {console.log('the skus')}
      {console.log(skus)}
    <Grid container direction="row" alignItems="center" alignContent="center" justify ="center" spacing = {1}>
    <Grid item xs = {6}>
      <Button aria-controls="sizes" aria-haspopup="true" onClick={e => setAnchorEl(e.currentTarget)}>
        Select Size
      </Button>
      <Menu
        id="sizes"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.keys(skus).map(keyname => (
          <MenuItem onClick={handleClose}>{skus[keyname].size}</MenuItem>
        ))}
      </Menu>
      </Grid>
      <Grid item xs = {6}>
      <Button aria-controls="quantity" aria-haspopup="true" onClick={e => setAnchorEl2(e.currentTarget)}>
        -
      </Button>
      <Menu
        id="quantity"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose}
      >
       {Object.keys(skus).map(keyname => (
          <MenuItem onClick={handleClose}>{skus[keyname].quantity}</MenuItem>
        ))}
      </Menu>
      </Grid>
      <Grid item xs = {6}>
    <Button variant="outlined">Add To Bag</Button>
    </Grid>
    <Grid item xs = {6}>
    <Button variant="outlined">The star button</Button>
    </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default AddToCart;