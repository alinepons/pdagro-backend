import express, { json } from 'express';
import userRouter from './routes/users.route';
import authRouter from './routes/auth.route';
import cors from 'cors';

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

// Registra rotas.
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`Listening ${port}`);
});
