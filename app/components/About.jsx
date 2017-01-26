var React = require('react');

var About = () => {
  return (
    <div className="card topmargin">
      <div className="card-divider">
        <h1 className="text-center page-title">About</h1>
      </div>
      <div className="card-section">
        <p>The WeatherCast is a simple weather application built with <a href="http://facebook.github.io/react">ReactJS</a> and <a href="http://openweathermap.org">OpenWeatherMap API</a>.</p>
        <p>Get today's current weather. To use the application, just search for a city (U.S. cities only).</p>
      </div>
    </div>
  );
};

module.exports = About;
