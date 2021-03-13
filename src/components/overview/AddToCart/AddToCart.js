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

  const [size, setSize] = React.useState('');
  const [sku, setSku] = React.useState('');
  const classes = useStyles();
  let rows = [];
  let isDisabled = true;

  const handleChange = (event) => {
    setSize(event.target.value);
    console.log(event.target.value);
  };

  const checkDisable = (event) => {
    if (event.target.value !== 'Select Size') {
    return  {disabled: false} ;
    } else {
      return {disabled: true };
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
      <FormControl variant="outlined" className={classes.formControl}disabled = {checkDisable}>
        <InputLabel id="quantity">-</InputLabel>
        <Select
          labelId="quantity"
          id="quantity "
          value={size}
          onChange={handleChange}

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
    <Button variant="outlined">The star button</Button>
    </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default AddToCart;