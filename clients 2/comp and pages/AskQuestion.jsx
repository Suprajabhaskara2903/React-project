import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import './AskQuestion.css'
// import { useNavigate } from 'react-router-dom'
import { askQuestion } from "../../actions/question";

const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch();
    const User = useSelector( (state) => (state.currentUserReducer) )
    // get the current user who asked the question
    const navigate = useNavigate();
    // we are using navigate as soon as we submit the question,we need to come to home page

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({questionTitle, questionBody, questionTags})
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name}, navigate))
    }

    const handleEnter= (e) =>{
        if (e.key === 'Enter') {
            setQuestionBody(questionBody + "\n")
        } 
    }

    return (
       <div className="ask-question">
            <div className="ask-ques-container">
                <h1> Ask a public qsn </h1>
                {/* <h1> ask a public qsn </h1>
                <h1> ask a public qsn </h1> */}
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container">
                        {/* id and htmlfor should have same value */}
                        <label htmlFor="ask-ques-title" >
                            <h4> Title</h4>
                            <p>Be specific and imagine you’re asking a question to another person</p>
                            {/* placeholder is text displayd as an example */}
                            <input type = "text" id= "ask-ques-title"  onChange={ (e) => {setQuestionTitle(e.target.value)}}     placeholder="e.g. Is there an R function for finding the index of an element in a vector?"/>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name="" id="ask-ques-body"   onChange={ (e) => {setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter} ></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input type="text" id='ask-ques-tags'  onChange={ (e) => {setQuestionTags(e.target.value.split(" "))}}  placeholder='e.g. (xml typescript wordpress)'/>
                        </label>
                    </div>
                    <input type="submit" value='Review your question' className='review-btn'/>
                </form>
            </div>
       </div>
       
    )
}

export default AskQuestion


// to get data from input/front end use onChange event handler
// e.target.value is value entered by user, whenever user enters data, it is captured using on change, given to setqsntitlefunction , 
// there by giving to qsntitle variable

// onkeypress function activates when any key gets pressed in the case of entering the text