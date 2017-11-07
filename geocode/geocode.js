//const os = require('os');

const request = require('request');


var geocodeAddress = (address, callback) => {

var encodedAddress = encodeURIComponent(address);

request({
  url: ,
  json: true
}, (error, response, body) => {
  if(error) {
    callback('Unable to connect to Google servers');
  } else if (body.status === 'ZERO_RESULTS') {
    callback('Unable to find that address');
  } else if (body.status === 'OK') {
    callback(undefined, {
      address: body.results[0].formatted_address,
      latitude: body.results[0].geometry.location.lat,
      longitude: body.results[0].geometry.location.lng
    })
  }
})
};

// module.exports.geocodeAddress = geocodeAddress;
//b623f550305bed95a1fc06d18fab5bd5

module.exports = {
  geocodeAddress
};
