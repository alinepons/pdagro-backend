import express from 'express';
import * as usersController from '../controllers/users.controller';
import * as authController from '../controllers/auth.controller';

const router = express.Router();

// router.post('/create', usersController.insert);
router.post('/delete', authController.deleteAccount);
router.put('/update', usersController.updateUser);

export default router;