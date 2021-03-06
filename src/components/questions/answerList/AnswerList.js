import React from 'react';
import Answer from '../answer/Answer.js';
import './AnswerList.css';
import { useState, useEffect } from 'react';
import apiController from '../../../apiController';


var AnswerList = (props) => {
  const [answers, setAnswers] = useState([]);
  const [aCount, setACount] = useState(2);

  var questionId = props.qId;
  var params = {page: 1, count: 500}

  var getAnswers = (questionId, params) => {
    apiController.getAnswers(questionId, params)
    .then((response) => {
      var sortedResponse = response.data.results.slice().sort((a) => (a.answerer_name === 'Seller') ? (-1) : 1);
      setAnswers(sortedResponse);
    })
  }

  useEffect(() => {
    getAnswers(questionId, params)
  }, [questionId]);


  if (answers.length === 0) {
    return <em style = {{color: 'gray'}}>There is no answers for this question yet</em>;
  }

  //handle load/collapse button
  var button;
  if (answers.length > 2) {
    if (answers.length <= aCount) {
      button = <button className = 'list_btn' onClick={() => setACount(2)}>Hide answers</button>
    } else {
      button = <button className = 'list_btn' onClick={() => setACount(aCount + 2)}>Load more answers</button>
    }
  } else {
    button = null;
  }


  return (
    <div className = 'answer_list_container'>

        <div className = 'a'>A:</div>
        <div className = 'list'>
          {answers.slice(0, aCount).map((individualAnswer) => {
            return (
              <Answer answer = {individualAnswer} key = {individualAnswer.answer_id} />
            );
          })}
          <div>{button}</div>
      </div>
    </div>
  )
};

export default AnswerList;



