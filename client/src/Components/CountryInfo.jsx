// Import React and PropTypes libraries
import React from 'react';
import PropTypes from 'prop-types';

// Define a functional component named CountryInfo
function CountryInfo({ info }) {
  // Destructure the first element of the info array and assign it to a variable named country
  const country = info[0];

  // Destructure the properties of the country object that we need
  const { name, flags, capital, region, population, currencies, languages } = country;

  // Get the name of the currency from the currencies object
  const currencyName = currencies[Object.keys(currencies)[0]].name;

  // Join the values of the languages object into a comma-separated string
  const languageNames = Object.values(languages).join(', ');

  // Return a JSX element that displays the country information
  return (
    <div className="info">
      <h2>{name.common}</h2>
      <img src={flags.png} alt="Flag" />
      <p>Capital: {capital}</p>
      <p>Region: {region}</p>
      <p>Population: {population}</p>
      <p>Currency: {currencyName}</p>
      <p>Languages: {languageNames}</p>
    </div>
  );
}

// Define the prop types for the CountryInfo component
CountryInfo.propTypes = {
  // The info prop is an array of objects that have the following shape
  info: PropTypes.arrayOf(
    PropTypes.shape({
      // The name property is an object that is required
      name: PropTypes.object.isRequired,
      // The flags property is an object that is required
      flags: PropTypes.object.isRequired,
      // The capital property is a string that is required
      capital: PropTypes.string.isRequired,
      // The region property is a string that is required
      region: PropTypes.string.isRequired,
      // The population property is a number that is required
      population: PropTypes.number.isRequired,
      // The currencies property is an object that is required
      currencies: PropTypes.object.isRequired,
      // The languages property is an object that is required
      languages: PropTypes.object.isRequired,
    })
  ).isRequired,
};

// Export the CountryInfo component as a default export
export default CountryInfo;
