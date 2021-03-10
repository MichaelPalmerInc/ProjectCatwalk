import React from 'react';
import Search from './search/Search.js';
import QuestionList from './questionList/QuestionList.js';
import './Questions.css';

var Questions = () => {
  return (
    <div className = 'questions_widget_container'>
      <Search />
      <QuestionList />
    </div>
  )
};

export default Questions;