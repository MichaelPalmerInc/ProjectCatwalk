import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import apiController from '../../../apiController';
import './form.css';

var AnswerForm = (props) => {
  const [answer, setAnswer] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  var questionId = props.questionId;

  var handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted ');
    props.handleClose();

    var params = {
      body: answer,
      name: nickname,
      email: email,
      photos: []
    }
    apiController.postAnswer(questionId, params);
  }

  return (
    <form onSubmit = {handleSubmit} autoComplete="off">
      <div className = 'form-container'>
       <TextField
        required id="standard-required"
        label="Your Answer"
        fullWidth value={answer}
        onChange={e => setAnswer(e.target.value)}
       /> <br />

      <TextField
        required id="standard-basic"
        label="What is your nickname"
        placeholder = 'Example: jackson11!'
        helperText = 'For privacy reasons, do not use your full name or email address'
        fullWidth value={nickname}
        onChange={e => setNickname(e.target.value)}
      /> <br />

      <TextField
        required id="standard-basic"
        label="What is your email"
        placeholder = 'Example: jack@email.com'
        fullWidth value={email}
        onChange={e => setEmail(e.target.value)}
        helperText = 'For authentication reasons, you will not be emailed'
      />

    </div>
    <Button type = 'submit' variant="contained" color="primary" >
      Submit answer
    </Button>
  </form>
  )
}

export default AnswerForm;



