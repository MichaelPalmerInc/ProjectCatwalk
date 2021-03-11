import React from 'react';
import Search from './search/Search.js';
import QuestionList from './questionList/QuestionList.js';
import './Questions.css';

var Questions = ({ productId = 21112 }) => {
  return (
    <div className="questions_widget_container">
      <Search />
      <QuestionList productId={productId} />
    </div>
  );
};

export default Questions;
