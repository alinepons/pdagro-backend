import express from 'express';
import * as companyController from '../controllers/company.controller'

const router = express.Router();

router.post('/create', companyController.createCompany);
router.get('/read/:id', companyController.getCompanyById);
 router.get('/read/user/:id', companyController.getCompanyByUser);
// router.put('/update', usersController.getUsers);

export default router;