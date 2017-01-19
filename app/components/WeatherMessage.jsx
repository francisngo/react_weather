var React = require('react');

var WeatherMessage = ({temp, location}) => { 
  return (
    <h3 className="text-center">It is {temp}&deg;F in {location.charAt(0).toUpperCase() + location.slice(1)}</h3>
  );
}

module.exports = WeatherMessage;
