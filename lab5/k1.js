
const express = require('express');


const app = express();


const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page!</h1>');
});


app.get('/about', (req, res) => {
  res.send('<h1>This is the About Page.</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Feel free to contact us at contact@domain.com.</h1>');
});

app.get('/api/data', (req, res) => {
  const data = {
    message: "Here is some data!",
    status: "success"
  };
  res.json(data);
});

app.post('/api/submit', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }


  res.status(201).json({
    message: "Data received successfully!",
    receivedData: { name, email }
  });
});


app.get('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
