import express, { NextFunction, Request, Response } from 'express';
import userRouter from './routes/users.route';
import authRouter from './routes/auth.route';
import diagnosticRouter from './routes/diagnostic.route';
import companyRouter from './routes/company.route';
import * as jwt from './utils/jwt';
import cors from 'cors';

const app = express();

const port = 3010;

app.use(cors());
app.use(express.json());

// Registra rotas.
app.use('/user', jwt.verifyToken, userRouter);
app.use('/company', jwt.verifyToken, companyRouter);
app.use('/diagnostic', jwt.verifyToken, diagnosticRouter);
app.use('/auth', authRouter);

// Tratamento de erros
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500
    res.status(status).json(error)
})

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});
