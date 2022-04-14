import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.get('/', (req, res) => {
  res.json({server: "pdagro"});
});

app.listen(port, () => {
  console.log(`⚡️[server]: Servidor rodando em https://localhost:${port}`);
});