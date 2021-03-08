import React from 'react';
import Search from './search/Search.js';
import QuestionList from './questionList/QuestionList.js';
import './Questions.css';

var Questions = () => {
  return (
    <div class = 'questions_widget_container'>
      <div class = 'search_form'>
      <Search />
      </div>
      <QuestionList />
    </div>
  )
};

export default Questions;