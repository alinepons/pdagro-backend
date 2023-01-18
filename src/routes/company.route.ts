import express from 'express';
import * as companyController from '../controllers/company.controller'

const router = express.Router();

router.post('/create', companyController.createCompany);
router.get('/readByUser', companyController.getCompanyByUser);
router.get('/readById', companyController.getCompanyById);

export default router;