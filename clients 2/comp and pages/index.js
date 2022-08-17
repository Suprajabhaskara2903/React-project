import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

// we have used the mentioned url in backend of code
export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)

export const getAllQuestions = () => API.get('/questions/get');

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered ) => API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered} )

export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)

// api is nothing but the url local host 5000