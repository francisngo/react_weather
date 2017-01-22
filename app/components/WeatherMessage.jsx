var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {location, temp, pressure, humidity} = this.props;
    return (
      <div className="card">
        <div className="card-divider">
          <h3 className='text-center'>{location.charAt(0).toUpperCase() + location.slice(1)}</h3>
        </div>
        <div className="card-section">
          <h3>Current Temp: {temp}&deg;F</h3>
          <h3>Pressure: {pressure}</h3>
          <h3>Humidity: {humidity}</h3>
        </div>
      </div>
    )
  }
});

module.exports = WeatherMessage;
