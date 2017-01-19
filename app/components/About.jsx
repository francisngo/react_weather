var React = require('react');

var About = (prop) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application build on React.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li><a href="http://facebook.github.io/react">React</a> - JavaScript framework</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a> - Search weather data by city name.</li>
      </ul>
    </div>
  );
};

module.exports = About;
