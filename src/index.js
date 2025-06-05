const express = require('express');
const sampleRoutes = require('./routes/sampleRoutes');
const userRoutes = require('./routes/userRoutes'); // Added: Import userRoutes
const db = require('./models'); // Added: Import db object

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Middleware to parse JSON bodies
app.use(express.json()); // Important for req.body

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', sampleRoutes);
app.use('/api', userRoutes); // Added: Use userRoutes

// Database connection test
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
