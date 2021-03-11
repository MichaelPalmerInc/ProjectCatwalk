import React , { useState } from 'react';
import AnswerList from '../answerList/AnswerList.js';
import './Question.css';
import Helpfulness from '../helpfulness/Helpfulness.js';
import AnswerModal from '../modals/AnswerModal.js';


var Question = (props) => {
  var id = props.question.question_id;
  var helpfulness = props.question.question_helpfulness;

  return (
    <div className = 'question_container'>
      <div className = 'question_line'>

        <div className ='question'>
          <div className = 'q'>Q:</div>
          <div className = 'question_text'>{props.question.question_body} </div>
        </div>

        <div className = 'help_add'>
          <Helpfulness
          helpfulness = {helpfulness}
          subject = 'Q'
          questionId = {id} />
          <AnswerModal questionId = {id}/>
        </div>

      </div>
      <AnswerList qId = {props.question.question_id}/>
    </div>
  )
};

export default Question;