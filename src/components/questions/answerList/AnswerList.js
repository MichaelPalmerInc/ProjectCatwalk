import React from 'react';
import Answer from '../answer/Answer.js';
import './AnswerList.css';

var AnswerList = () => {
  return (
    <div class = 'answer_list_container'>
      <div class = 'a'>A:</div>
      <div class = 'list'>
      <Answer />
      <Answer />
      <button class = 'load_answers'>Load more answers</button>
      </div>
    </div>
  )
};

export default AnswerList;