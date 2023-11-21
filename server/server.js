// const express = require('express');
// const fetch = require('node-fetch');
// const cors = require('cors'); // require the cors module

// const app = express();

// // Enable CORS for all routes
// app.use(cors());

// app.get('/api/country/:name', async (req, res) => {
//   try {
//     const response = await fetch(`https://restcountries.com/v3/name/${req.params.name}`);
//     const data = await response.json();
//     res.send(data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// const port = 3001;

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
// server/index.js
// Import Express and other packages
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Use cors middleware
app.use(cors());
// Create a route for fetching country information
app.get('/country/:name', async (req, res) => {
  // Extract the country name from the request parameters
  const name = req.params.name;

  // Make a GET request to the REST Countries API using the country name
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    // Send the response data back to the frontend
    res.json(response.data);
  } catch (error) {
    // Send an error message back to the frontend
    res.status(500).send('Something went wrong');
    // Log the error for debugging purposes
    console.error(error);
  }
});

// Start the server on port 3001
app.listen(3001, () => {
  // Print a message indicating that the server is running
  console.log('Server is running on port 3001');
});


