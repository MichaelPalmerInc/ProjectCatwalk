import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Grid,FormControl,InputLabel,Select,makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const AddToCart = ({skus}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [size, setSize] = React.useState('');

  const classes = useStyles();

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  return (
    <div>
    <div>

    <Grid container direction="row" alignItems="center" alignContent="center" justify ="center" spacing = {1}>
    <Grid item xs = {6}>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="size">Select Size</InputLabel>
        <Select
          labelId="size"
          id="size"
          value={size}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Select Size</em>
          </MenuItem>
         {Object.keys(skus).map(keyname => (
          <MenuItem value = {skus[keyname].size} onClick={(e)=> {
            console.log(skus[keyname].size);
            handleClose();
          }}
           >{skus[keyname].size}</MenuItem>
        ))}
        </Select>
      </FormControl>
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