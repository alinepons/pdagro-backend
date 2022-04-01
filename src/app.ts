import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({server: "pdagro"});
});

app.listen(port, () => {
  console.log(`⚡️[server]: Servidor rodando em https://localhost:${port}`);
});