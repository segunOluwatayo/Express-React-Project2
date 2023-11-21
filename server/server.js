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


