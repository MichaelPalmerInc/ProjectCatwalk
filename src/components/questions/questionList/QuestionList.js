import React from 'react';
import Question from '../question/Question.js';
import QuestionModal from '../modals/QuestionModal.js';
import './QuestionList.css';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import apiController from '../../../apiController';


var QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [qCount, setQCount] = useState(4);

  var productId = 21113;
  var params = {pages: 1, count: 5}

  var getQuestions = () => {
    apiController.getQuestions(productId, params)
    .then((response) => {
      setQuestions(response.data.results);
    })
  }

  useEffect(() => {
    getQuestions(params)
  }, []);
  useEffect(() => {
    getQuestions(params)
  }, [qCount]);


  if (questions.length === 0) {
    return <Button>Add a question</Button>
  }

  var loadBtn;
  if (questions.length > 4) {
    if (questions.length <= qCount) {
      loadBtn = <Button onClick = {() => setQCount(4)}>Hide Questions</Button>
    } else {
      loadBtn = <Button onClick = {() => setQCount(qCount + 2)}>More Answered questions</Button>
    }
  } else {
    loadBtn = null;
  }


  return (
    <div>
      {questions.slice(0, qCount).map((question) => {
        return (
          <Question question = {question} key = {question.question_id} />
        )
      }
      )}

      <div className = 'q_list_btns'>
        <div style = {{marginRight: '30px'}}>
          {loadBtn}
        </div>
        <QuestionModal productId = {productId}/>
      </div>
    </div>
  )
};

export default QuestionList;