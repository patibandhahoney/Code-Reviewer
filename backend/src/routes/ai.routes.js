import express from 'express';
import { getReview } from '../controllers/ai.controller.js';

const router = express.Router();

router.post('/get-review', getReview); // ✅ POST method

export default router;
