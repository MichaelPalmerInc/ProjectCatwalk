import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import './Search.css';

var Search = (props) => {

  return (
    <div className = 'search_form'>
      <SearchBar
        onChange={(value) => props.handleChange(value)}
        style={{
          minWidth: 500
        }}
      />
    </div>
  )
};

export default Search;

