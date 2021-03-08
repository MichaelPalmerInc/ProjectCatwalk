import React from 'react';
import AnswerList from '../answerList/AnswerList.js';
import './Question.css';
import Helpfulness from '../helpfulness/Helpfulness.js';

var Question = () => {
  return (
    <div class = 'question_container'>

      <div class = 'question_line'>

        <div class ='question'>
          <div class = 'q'>Q:</div>
          <div class = 'question_text'>Where am I??? </div>
        </div>
      <div class = 'help_add'>
        <Helpfulness />
        <a href = '#' class = 'add_answer_link'>Add answer</a>
      </div>

      </div>

      <AnswerList />
    </div>
  )
};

export default Question;