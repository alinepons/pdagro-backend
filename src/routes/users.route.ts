import express from 'express';
import * as usersController from '../controllers/users.controller';
import * as jwt from '../utils/jwt';

const router = express.Router();

// router.post('/create', usersController.insert);
// router.get('/read', usersController.getMyUser);
router.put('/update', usersController.updateUser);

export default router;