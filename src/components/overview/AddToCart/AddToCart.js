import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Grid } from '@material-ui/core';


const AddToCart = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <div>
    <Grid container direction="row" alignItems="center" alignContent="center" justify ="center" spacing = {1}>
    <Grid item xs = {6}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Select Size
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>S</MenuItem>
        <MenuItem onClick={handleClose}>M</MenuItem>
        <MenuItem onClick={handleClose}>L</MenuItem>
      </Menu>
      </Grid>
      <Grid item xs = {6}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Quantity
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>1</MenuItem>
        <MenuItem onClick={handleClose}>2</MenuItem>
        <MenuItem onClick={handleClose}>3</MenuItem>
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