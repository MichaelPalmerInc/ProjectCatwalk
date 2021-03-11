import React from 'react';
import Question from '../question/Question.js';
import Search from '../search/Search.js';
import QuestionModal from '../modals/QuestionModal.js';
import './QuestionList.css';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import apiController from '../../../apiController';

var QuestionList = ({ productId }) => {
  const [questions, setQuestions] = useState([]);
  const [qCount, setQCount] = useState(4);
  const [currentQuestions, setCurrentQuestions] = useState([]);

  var params = { pages: 1, count: 500 };

  var getQuestions = () => {
    apiController.getQuestions(productId, params).then((response) => {
      setQuestions(response.data.results);
      setCurrentQuestions(response.data.results);
    })
  }

  var handleInputChange = (input) => {
    var filteredQuestions = questions.filter(question => {
      return question.question_body.toLowerCase().includes(input.toLowerCase());
    })
    setCurrentQuestions(filteredQuestions);
   }


  useEffect(() => {
    getQuestions(params);
  }, [qCount]);

  if (questions.length === 0) {
    return <Button>Add a question</Button>;
  }

  var loadBtn;
  if (questions.length > 4) {
    if (questions.length <= qCount) {
      loadBtn = <Button onClick={() => setQCount(4)}>Hide Questions</Button>;
    } else {
      loadBtn = <Button onClick={() => setQCount(qCount + 2)}>More Answered questions</Button>;
    }
  } else {
    loadBtn = null;
  }

  return (
    <div>
      <Search questions = {questions} handleChange = {handleInputChange}/>
      {currentQuestions.slice(0, qCount).map((question) => {
        return (
          <Question question = {question} key = {question.question_id} />
        )
      }
      )}

      <div className="q_list_btns">
        <div style={{ marginRight: '30px' }}>{loadBtn}</div>
        <QuestionModal productId={productId} />
      </div>
    </div>
  );
};

export default QuestionList;
