import React from 'react';
import Answer from '../answer/Answer.js';
import './AnswerList.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


import API_KEY from '../../../config/config.js';


axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/';
axios.defaults.headers.common['Authorization'] = API_KEY;


var AnswerList = (props) => {
  const [answers, setAnswers] = useState([]);
  const [aCount, setACount] = useState(2);

  var questionId = props.qId;


  var getAnswers = (questionId, {pages, count}) => {
    pages = pages || 1;
    count = count || 5;
    let params = {page: pages, count: count};

    return axios.get(`/qa/questions/${questionId}/answers`, {params})
    .then((response) => {
      setAnswers(response.data.results);
    })
    .catch((err) => {
      console.error('Failed to load answers ', err);
    })
  };

  var params = {page: 1, count: 5}
  useEffect(() => {
    getAnswers(questionId, {params})
  }, []);

  useEffect(() => {
    getAnswers(questionId, {params})
  }, [questionId]);


  if (answers.length === 0) {
    return <em style = {{color: 'gray'}}>There is no answers for this question yet</em>;
  }

  //handle load/collapse button
  var button;
  if (answers.length > 2) {
    if (answers.length <= aCount) {
      button = <button class = 'load_answers' onClick={() => setACount(2)}>Hide answers</button>
    } else {
      button = <button class = 'load_answers' onClick={() => setACount(aCount + 2)}>Load more answers</button>
    }
  } else {
    button = null;
  }

  return (
    <div class = 'answer_list_container'>

        <div class = 'a'>A:</div>
        <div class = 'list'>
          {answers.slice(0, aCount).map((individualAnswer) => {
            return (
              <Answer answer = {individualAnswer} key = {individualAnswer.answer_id} />
            );
          })}

          {button}
      </div>
    </div>
  )
};

export default AnswerList;



