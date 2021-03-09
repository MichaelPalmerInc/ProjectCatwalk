import React from 'react';
import Search from './search/Search.js';
import QuestionList from './questionList/QuestionList.js';
import './Questions.css';

var Questions = () => {
  return (
    <div className = 'questions_widget_container'>
      <div className = 'search_form'>
      <Search />
      </div>
      <QuestionList />
    </div>
  )
};

export default Questions;