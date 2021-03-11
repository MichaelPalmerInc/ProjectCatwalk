import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import './Search.css'

var Search = (props) => {
  const [inputQ, setInputQ] = useState('');

  var handleSearch = (input) => {
    console.log('searching for:' + input)
  }
  return (
    <div className = 'search_form'>
      <SearchBar
        onChange={(value) => setInputQ(value)}
        onRequestSearch={() => handleSearch(inputQ)}
        style={{
          minWidth: 500
        }}
      />
    </div>
  )
};

export default Search;

