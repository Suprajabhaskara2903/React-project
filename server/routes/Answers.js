import express from "express"

import {postAnswer} from '../controllers/Answers.js'

const router = express.Router();

router.patch('/post/:id', postAnswer )

export default router

// patch is to post an answer
// why not post? patch is used to update a particular record in the database
// id is id of the question whch was answered