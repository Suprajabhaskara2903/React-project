import Questions from '../models/Questions.js' 

import mongoose from 'mongoose'

export const AskQuestion = async(req, res) => {
      const postQuestionData = req.body
    //   req contains waht user enters in thr front end - title, body etc whatever present in the question field

    const postQuestion = new Questions({...postQuestionData, userId: req.userId});
    // we are passing the data user asked data along with user id by req.userid to postQuestion object in the from of Questions schema
    // postQuestion is the new object for the question database

    try{
            await postQuestion.save()
            //save postquestion obj in momgodb
            res.status(200).json("Posted a Question successfully")
            // if data is successfully stored in mongodb, reply with status code 200
    }
    catch(error){
            console.log(error)
            res.status(409).josn("couldnt post the data ")
    }
}

//get data from the data base
export const getAllQuestions = async(req, res) => {
        try{
                // Questions is schema/db, questionlist has all the records presenr
                // .find finds the records 
                const questionList = await Questions.find();
                res.status(200).json(questionList)
        }
        catch (error){
                res.status(404).json({message: error.message});
        }
}

// write logic to delete:
export const deleteQuestion = async (req, res) => {
        // retrieve the id
        //req.params is avialble in the id
        const { id:_id } = req.params ;
    
        //check if id is valid mongo db id
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send('question unavailable...');
        }
    
        try {
            await Questions.findByIdAndRemove( _id );
            res.status(200).json({ message: "successfully deleted..."})
        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    }
