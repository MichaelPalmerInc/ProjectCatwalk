import React, { useState } from "react";
import './QuestionForm.css';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import axios from 'axios';



var QuestionForm = (props) => {
  const [question, setQuestion] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  var postQuestion = (params) => {
    return axios.post('/qa/questions', params)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error('Oh noes ', err);
    })
  }

  var handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted ');
    props.handleClose();

    var params = {
      body: question,
      name: nickname,
      email: email,
      product_id: props.productId
    }
    postQuestion(params);
  }

  return (
    <form onSubmit = {handleSubmit} autoComplete="off">
      <div className = 'form-container'>
       <TextField required id="standard-required" label="Add your question" placeholder = 'Why did you like the product or not?' fullWidth value={question} onChange={e => setQuestion(e.target.value)}/> <br />

      <TextField required id="standard-basic" label="What is your nickname*" placeholder = 'Example: jackson11!' fullWidth value={nickname} onChange={e => setNickname(e.target.value)}/> <br />

      <TextField required id="standard-basic" label="What is your email*" fullWidth value={email} onChange={e => setEmail(e.target.value)} helperText = 'For authentication reasons, you will not be emailed'/>

    </div>
    <Button type = 'submit' variant="contained" color="primary" >
      Submit Quesion
    </Button>
  </form>
  )
}

export default QuestionForm;



