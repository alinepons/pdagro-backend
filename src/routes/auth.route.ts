import express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/forgot-password', authController.forgotPassword);
router.post('/change-password', authController.changePassword);
router.post('/send-code', authController.sendConfirmationCode);

export default router;