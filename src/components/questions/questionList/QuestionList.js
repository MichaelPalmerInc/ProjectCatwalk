import React from 'react';
import Question from '../question/Question.js';
import QuestionModal from '../modals/QuestionModal.js';
import './QuestionList.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import API_KEY from '../../../config/config.js';

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/';
axios.defaults.headers.common['Authorization'] = API_KEY;


var QuestionList = () => {
  //var allQuestions = useSelector(state => state.questions);
  var productId = 21114;

  const [questions, setQuestions] = useState([]);
  const [qCount, setQCount] = useState(4);

  var getQuestions = ({product_id, pages, count}) => {
    pages = pages || 1;
    count = count || 5;
    product_id = product_id || 21112;
    let params = {product_id: product_id, page: pages, count: count};
    console.log('---', params.product_id)

    axios.get('/qa/questions', {params})
    .then((response) => {
      console.log('product id: ', productId);
      console.log(response.data);
      setQuestions(response.data.results);
    })
    .catch((err) => {
      console.error('Failed to get questions ', err);
    })
  };

  var params = {product_id: productId, pages: 1, count: 25}


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
      })}

    <div class = 'q_list_btns'>
      <div style = {{marginRight: '30px'}}>
        {loadBtn}
      </div>
        <QuestionModal productId = {productId}/>

      </div>
    </div>
  )
};



export default QuestionList;