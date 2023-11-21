import React from 'react';
import PropTypes from 'prop-types';

function CountryInfo({ info }) {
  const country = info[0];
  const { name, flags, capital, region, population, currencies, languages } = country;

  const currencyName = currencies[Object.keys(currencies)[0]].name;
  const languageNames = Object.values(languages).join(', ');

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

CountryInfo.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.object.isRequired,
      flags: PropTypes.object.isRequired,
      capital: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
      currencies: PropTypes.object.isRequired,
      languages: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default CountryInfo;
