import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(port, () => console.log(`\x1b[35mServer running at http://localhost:${port}\x1b[0m`));
