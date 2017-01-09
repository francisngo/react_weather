var axios = require('axios');

const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const API_KEY = '969ded347e45fbcdf68e410938a3d616';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${ROOT_URL}&q=${encodedLocation}&units=imperial`;

    axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
