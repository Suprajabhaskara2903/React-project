// post answer into database:

import mongoose from 'mongoose'

import Questions from '../models/Questions.js'

export const postAnswer = async(req, res) => {
    const { id : _id} = req.params;
    const {noOfAnswers, answerBody, userAnswered} = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('not valid')
    }
    updateNoOfQuestions(_id, noOfAnswers)
    try {
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, {$addToSet : {'answer' :[{answerBody, userAnswered, userId : req.userId}]      }} )
        // findbyid finds object with specified id and updates
        // addtoset
        res.status(200).json(updatedQuestion)

    }
    catch(error){
        res.status(400).json(error)
    }

} 

const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate( _id, { $set: { 'noOfAnswers' : noOfAnswers}})
    } catch (error) {
        console.log(error)
    }
}

// findbyidandUpdate is function provided by mongoose to find id of the object in db
// and update its parameters
// addtoset and set are also provided by mongoose
// set updates the parameter by replacing
// addtoset appends the answer to array
// thus we used addtoset to append answer to array
// set to chnage the noofans value