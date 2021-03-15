import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Grid,FormControl, InputLabel, Select, makeStyles, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import RedditIcon from '@material-ui/icons/Reddit';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
}));
const AddToCart = ({skus}) => {

  const [size, setSize] = React.useState('');
  const [sku, setSku] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [isDisabled, setDisabled] = React.useState(true);
  const classes = useStyles();
  let rows = [];

  const handleChange = (event) => {
    setSize(event.target.value);
    checkDisable(event);
    console.log(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  }

  const checkDisable = (event) => {
    console.log(event.target.value);
    if (event.target.value !== 'Select Size') {
      setDisabled(false);
      console.log('inside false ' ,isDisabled);
    } else {
      console.log('inside true ', isDisabled);
      setDisabled(true);
    }

  }

  for (let i = 1; i <= sku.quantity; i++) {
    rows.push(i);
  }
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
            console.log(skus[keyname]);
            setSku(skus[keyname]);
                    }}
           >{skus[keyname].size}</MenuItem>
        ))}
        </Select>
      </FormControl>

      </Grid>
      <Grid item xs = {6}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="quantity">-</InputLabel>
        <Select
          labelId="quantity"
          id="quantity "
          value={quantity}
          onChange={handleQuantity}
          disabled = {isDisabled}
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
         {rows.map(quantity => (

           <MenuItem value = {quantity} onClick={(e)=> {
             console.log(quantity);
           }}
            >{quantity}</MenuItem>
         ))
        }
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs = {6}>
    <Button variant="outlined">Add To Bag</Button>
    </Grid>
    <Grid item xs = {6}>
    <IconButton aria-label="Facebook.com" onClick={() => window.open('https://www.Facebook.com')}>
      <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="Twitter.com" onClick={() => window.open('https://www.Twitter.com')}>
      <TwitterIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="Instagram.com" onClick={() => window.open('https://www.Instagram.com')}>
      <InstagramIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="Reddit.com" onClick={() => window.open('https://www.Reddit.com')}>
      <RedditIcon fontSize="large" />
      </IconButton>
    </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default AddToCart;