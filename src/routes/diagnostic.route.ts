import express from 'express';
import * as diagnosticController from '../controllers/diagnostic.controller';

const router = express.Router();

router.get('/questions', diagnosticController.getQuestions);
router.post('/create', diagnosticController.createDiagnostic);
router.get('/read', diagnosticController.getDiagnostic);

export default router;