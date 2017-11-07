const request = require('request');


var getWeather = (latitude, longitude, callback) => {
  request ({
    url: `https://api.darksky.net/forecast/b623f550305bed95a1fc06d18fab5bd5/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to forecast.io');
    } else if (response.statusCode === 400){
      callback('Bad Server. Check the URL');
    } else if (response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        windSpeed: body.currently.windSpeed
      })
    };
  });
};

module.exports = {
  getWeather
};
