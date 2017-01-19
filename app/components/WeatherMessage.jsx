var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div className="card">
      <div className="card-section">
        <h3 className="text-center">It's it {temp}&deg;F in {location.charAt(0).toUpperCase() + location.slice(1)}.</h3>
      </div>
    </div>

  )
};

module.exports = WeatherMessage;
