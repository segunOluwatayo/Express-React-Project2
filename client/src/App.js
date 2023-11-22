// Import necessary libraries and components
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import CountryInfo from './Components/CountryInfo';
import Loading from './Components/Loading';
import Footer from './Scenes/Footer/Footer';

// Define the API URL for fetching country information
const API_URL = 'http://localhost:3001/country/';

// Define the main component App
const App = () => {
  // State variables using the useState hook
  const [country, setCountry] = useState('');
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch country information from the server
  const fetchCountryInfo = async () => {
    // Set loading to true and clear any previous errors
    setLoading(true);
    setError(null);

    try {
      // Make a GET request to the server using axios
      const response = await axios.get(`${API_URL}${country}`);

      // Check if the response data is empty
      if (response.data.length === 0) {
        setError('No data found for this country');
      } else {
        // Set the retrieved information to the state variable
        setInfo(response.data);
      }
    } catch (error) {
      // Use a catch block to handle errors
      if (error.response) {
        // Handle errors related to the server response
        if (error.response.status === 404) {
          setError('The server encountered an internal error');
        } else if (error.response.status === 500) {
          setError('The country name is invalid or not found');
        } else {
          setError(`An error occurred while fetching data: ${error.response.status}`);
        }
      } else if (error.request) {
        // Handle errors related to the request not receiving a response
        setError('The server did not respond to the request');
      } else {
        // Handle other types of errors
        setError(`An error occurred while setting up the request: ${error.message}`);
      }
    }

    // Set loading back to false after the request is complete
    setLoading(false);
  };

  // Function to handle the search button click
  const handleSearch = () => {
    // Check if the country input is not empty
    if (country) {
      // Trigger the fetchCountryInfo function
      fetchCountryInfo();
    }
  };

  // JSX structure of the component
  return (
    <div className="App">
      {/* Header */}
      <h1>Country Information</h1>

      {/* Input for entering the country name */}
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter a country name"
        disabled={loading}
      />

      {/* Search button */}
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>

      {/* Display loading spinner while fetching data */}
      {loading && <Loading />}

      {/* Display error message if there is an error */}
      {error && <p className="Error">{error}</p>}

      {/* Display country information if available */}
      {info && <CountryInfo info={info} />}

      {/* Footer component */}
      <Footer></Footer>
    </div>
  );
};

// Export the App component as the default export
export default App;
