import express from 'express';

const port = 31847;
const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello, the server is running :)');
});

app.listen(port, async () => {
  console.log(`Listening at http://localhost:${port}`);
});
