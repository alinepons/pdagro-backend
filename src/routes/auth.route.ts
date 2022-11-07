import express from 'express';
import { Request, Response } from 'express';
import { AuthDto } from '../dtos/auth-dto';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', authController.login);

export default router;