import express from 'express';
import * as usersController from '../controllers/users.controller';
import * as jwt from '../utils/jwt';

const router = express.Router();

router.post('/', usersController.insert);

// Esta rota é protegida.
router.get('/my', jwt.verifyToken, usersController.getMyUser);

router.get('/', usersController.getUsers);

export default router;