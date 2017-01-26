var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      temp_min: undefined,
      temp_max: undefined,
      pressure: undefined,
      humidity: undefined,
      wind: undefined,
      wind_deg: undefined
    });

    openWeatherMap.getTemp(location).then(function (weather) {
      that.setState({
        location: location,
        temp: Math.floor(weather.temp),
        temp_min: Math.floor(weather.temp_min),
        temp_max: Math.floor(weather.temp_max),
        pressure: weather.pressure,
        humidity: weather.humidity,
        wind: Math.floor(weather.wind),
        wind_deg: Math.floor(weather.wind_deg),
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var { isLoading, temp, temp_min, temp_max, location, pressure, humidity, wind, wind_deg, errorMessage } = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage
          temp={temp}
          temp_min={temp_min}
          temp_max={temp_max}
          location={location}
          pressure={pressure}
          humidity={humidity}
          wind={wind}
          wind_deg={wind_deg}
        />;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Today's Forecast:</h1>
        {renderMessage()}
        <WeatherForm onSearch={this.handleSearch}/>
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
