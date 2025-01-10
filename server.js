// Import express module
const express = require('express');

// Create express app
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('You are successfully tested');
});

// Define a port for the server to listen on
const port = process.env.PORT || 3000; // Vercel automatically provides this value

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
