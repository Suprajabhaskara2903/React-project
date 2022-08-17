import React from "react";
import * as api from '../api'

// when we review the question, click on review qsn button, this function is gonna be performed
// what does this function do?
// adds qsn to database, navigates to home page after review button is clicked
export const askQuestion = (questionData, navigate) => async(dispatch) => {
  try{
    const {data} = await api.postQuestion(questionData)
    dispatch( {type : "POST_QUESTION", payload : data})
    navigate('/')
    // navigate to home page
  }
  catch (error){
    console.log(error)
  }
}


export const fetchAllQuestions = () => async(dispatch) => {
  try{
    const {data} = await api.getAllQuestions()
    //the getallqeues function is the func written in api->index.js
    dispatch({type : 'FETCH_ALL_QUESTIONS', payload: data})
  }
  catch(error){
    console.log(error)
  }
}

export const postAnswer = (answerData) => async (dispatch) => {
  try {
      const { id, noOfAnswers, answerBody, userAnswered } = answerData;
      const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered )
      dispatch({ type: 'POST_ANSWER', payload: data})
      dispatch(fetchAllQuestions())
  } catch (error) {
      console.log(error)
  }
}

// WHILE we click on submit button, postanswer function is triggered

//write action to delete qsb: in front end

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
      await api.deleteQuestion(id)
      dispatch(fetchAllQuestions())
      navigate('/')
  } catch (error) {
      console.log(error)
  }
}
