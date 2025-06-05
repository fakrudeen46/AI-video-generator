const express = require('express');
const sampleRoutes = require('./routes/sampleRoutes'); // Added this line
const app = express();
const port = 3000;

// Original root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use sample routes with a base path
app.use('/api', sampleRoutes); // Added this line

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
