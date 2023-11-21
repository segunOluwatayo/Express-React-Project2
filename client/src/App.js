import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CountryInfo from './Components/CountryInfo';
import Loading from './Components/Loading';
import Header from './Scenes/Header';
import Footer from './Scenes/Footer';





const API_URL = 'http://localhost:3001/country/';

const App = () => {
  const [country, setCountry] = useState('');
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCountryInfo = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}${country}`);

      if (response.data.length === 0) {
        setError('No data found for this country');
      } else {
        setInfo(response.data);
      }
    } catch (error) {
      // Use a catch block to handle the error in the frontend
      // Check the status code and the error object to display a more specific error message
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        if (error.response.status === 404) {
          setError('The server encountered an internal error');
        } else if (error.response.status === 500) {
          setError('The country name is invalid or not found');
        } else {
          setError(`An error occurred while fetching data: ${error.response.status}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError('The server did not respond to the request');
      } else {
        // Something happened in setting up the request that triggered an error
        setError(`An error occurred while setting up the request: ${error.message}`);
      }
    }

    setLoading(false);
  };

  const handleSearch = () => {
    if (country) {
      fetchCountryInfo();
    }
  };

  return (
    <div className="App">
        <Header />
      <h1>Country Information</h1>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter a country name"
        disabled={loading}
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>
      {loading && <Loading />}
      {error && <p className="Error">{error}</p>}
      {info && <CountryInfo info={info} />}
      <Footer></Footer>
    </div>
  );
};

export default App;

