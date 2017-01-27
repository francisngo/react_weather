var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var { location, temp, weather_desc, temp_min, temp_max, pressure, humidity, wind, wind_deg } = this.props;
    return (
      <div className="card">
        <div className="card-divider">
          <h3 className='text-center'>{location.charAt(0).toUpperCase() + location.slice(1)}</h3>
        </div>
        <div className="card-section">
          <h3>Current Temp: <strong>{temp}&deg;F</strong></h3>
          <h4>L: <strong>{temp_min}&deg;F</strong> / H: <strong>{temp_max}&deg;F</strong></h4>
          <h4>Pressure: {pressure} hpa</h4>
          <h4>Humidity: {humidity}%</h4>
          <h4>Wind: {wind_deg}&deg; / {wind} mph</h4>
        </div>
      </div>
    )
  }
});

module.exports = WeatherMessage;
