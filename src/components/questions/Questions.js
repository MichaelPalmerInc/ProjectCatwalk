import React from 'react';
import QuestionList from './questionList/QuestionList.js';
import './Questions.css';

var Questions = ({ productId = 21112 }) => {
  return (
    <div>
      <QuestionList productId={productId}/>
    </div>
  );
};

export default Questions;
