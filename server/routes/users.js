import express from 'express';
import { login } from '../controllers/auth.js';
import { signup } from '../controllers/auth.js';

const router = express.Router();

// router.post('/signup', () => {})
router.post('/signup', signup)
router.post('/login', login)

export default router