import React from "react";
import {Link, useLocation } from 'react-router-dom'
import Questions from './Questions';
// useLocation hook is used to check the url name in react
import QuestionList from "./QuestionList";
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

 
import './HomeMainBar.css'
 
 
const HomeMainbar = () => {
    const user = 1;
    const navigate = useNavigate();
    const location = useLocation();

    const questionsList = useSelector(state => state.questionsReducer)
    console.log(questionsList)
    // useSelector hook gets data from backend to front end


    // var questionsList = [{
    //     _id: 1,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{
    //     _id: 2,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{
    //     _id: 3,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]
    
    

    const checkAuth = () =>{
        if (user === null){
            alert("login or sign up to continue")
            navigate('/Auth')
        } 
        else{
            navigate('/AskQuestion')
        }
        
    }

    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    // if url is in the home page, return heading of top questions
                    location.pathname === '/' ? <h1>
                        Top Questions
                    </h1> : <h1> All Questions</h1>
                }
                {/* this is button/link of ask question */}
                {/* if user == null, redirect else ask question */}
                {/* on clicking askquestion, activate checkAuth function */}
                <button  onClick={checkAuth} className="ask-btn"> Ask Question </button>
            </div>
            {/* to display questions list */}
             <div>{
                questionsList.data === null ? <h1> Loading.. </h1> :
                <>
                    <p>{questionsList.data.length}
                      
                    </p>
                  
                    {/* <QuestionList questionsList = {questionsList}/> */}
                    
                    <QuestionList questionsList={questionsList.data} />
                    
                  
                </>
}
             </div>
        </div>
    )
 
}
 
export default HomeMainbar
 
