import express from 'express';
import * as diagnosticController from '../controllers/diagnostic.controller';

const router = express.Router();

router.get('/questions', diagnosticController.getQuestions);
router.post('/create', diagnosticController.createDiagnostic);
router.delete('/delete', diagnosticController.deleteDiagnostic);
router.get('/read', diagnosticController.getDiagnostic);
router.post('/certificate', diagnosticController.getCertificate);

router.get('/feedback/getAll', diagnosticController.getFeedback);

export default router;