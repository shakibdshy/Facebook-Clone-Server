import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// Create a user
router.post('/signup', signup);

// Sign In
router.post("/signin", signin)


export default router;