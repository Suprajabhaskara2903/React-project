import express from 'express'

import {AskQuestion} from '../controllers/Questions.js'
import {getAllQuestions, deleteQuestion} from '../controllers/Questions.js'


const router = express.Router()

router.post('/Ask', AskQuestion)
// post requesr is used to ask a question
// AskQustion is a controlleer/ function that is imported
router.get('/get', getAllQuestions)

router.delete('/delete/:id', deleteQuestion)

export default router


// SyntaxError: The requested module '../controllers/Questions.js' does not provide an export named 'default'
// The error "The requested module does not provide an export named" occurs when mixing up default and named ES6 
// module imports and exports. To solve the error 
// make sure to import default exports without using curly braces and import named exports with curly braces