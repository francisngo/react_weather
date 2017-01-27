var axios = require('axios');

const API_KEY = '969ded347e45fbcdf68e410938a3d616';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${ROOT_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return {
          temp: res.data.main.temp,
          temp_min: res.data.main.temp_min,
          temp_max: res.data.main.temp_max,
          pressure: res.data.main.pressure,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
          wind_deg: res.data.wind.deg
        };
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
