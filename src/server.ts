import express from 'express';

const port = 3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Hello, the server is running and data is ${JSON.stringify(req.query)}`);
});

app.get('/test', (req, res) => {
  res.send(`Oh, a test! :) ... and more data? ${JSON.stringify(req.query)}`);
});

app.post('/', (req, res) => {
  res.send(`Oh yes, I got a POST request :) And the data is: ${JSON.stringify(req.body)}`);
});

app.listen(port, async () => {
  console.log(`Listening at http://localhost:${port}`);
});
