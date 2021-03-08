import React from 'react';
import AnswerList from '../answerList/AnswerList.js';
import './Question.css';
import Helpfulness from '../helpfulness/Helpfulness.js';
import AnswerModal from '../modals/AnswerModal.js';

var Question = (props) => {
  return (
    <div class = 'question_container'>

      <div class = 'question_line'>

        <div class ='question'>
          <div class = 'q'>Q:</div>
          <div class = 'question_text'>{props.question.question_body} </div>
        </div>
      <div class = 'help_add'>
        <Helpfulness helpfulness = {props.question.question_helpfulness}/>
        {/* <a href = '#' class = 'add_answer_link'>Add answer</a> */}
        <AnswerModal questionId = {props.question.question_id}/>
      </div>

      </div>

      <AnswerList qId = {props.question.question_id}/>
    </div>
  )
};

export default Question;