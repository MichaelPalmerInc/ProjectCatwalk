import React, { useState } from 'react';
//import { TextField } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
//import Button from '@material-ui/core/Button';

var Search = (props) => {
  const [inputQ, setInputQ] = useState('');

var handleSearch = (input) => {
  console.log('searching for:' + input)
}
  return (
    <form>
      <SearchBar
        onChange={(value) => setInputQ(value)}
        onRequestSearch={() => handleSearch(inputQ)}
        style={{
          minWidth: 500
        }}
      />

      {/* <Button type = 'submit' variant="contained" color="primary" >
      Submit answer
    </Button> */}
    </form>
  )
};

export default Search;

