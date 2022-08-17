// import React from "react";
// import Question from './Questions'
// // import Questions from "../../Pages/Questions/Questions";

// const QuestionList = ({QuestionList}) => {
// return (
// 	<>
//     {
//         questionsList.map((question) => (
//             // pass individual question as parameter
//             <Questions question = {question} key = {question.id}/>
//         ))
//     }
//     </>
// )
// }

// export default QuestionList;


import React from 'react'
import Questions from './Questions'
const QuestionList = ({questionsList}) => {
    return (
        <>
            {
                questionsList.map((question) => (
                    <Questions question={question} key={question._id}/>
                ))
            }
        </>
    )
}

export default QuestionList
