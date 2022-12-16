import express from 'express';
import * as replyController from '../controllers/reply.controller';

const router = express.Router();

router.get('/question', replyController.getQuestions);
// router.get('/result');
// router.post('/reply');

export default router;