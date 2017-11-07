const yargs = require('yargs');
const weather = require('./weather/weather.js')
const geocode = require('./geocode/geocode.js')
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  } else {
    console.log('Location: ', results.address);
    weather.getWeather(results.latitude, results.longitude, (errorDisplay, weatherResults) => {
      if(errorDisplay) {
        console.log(errorDisplay);
      } else {
        console.log(`Temperature: ${weatherResults.temperature}\nWind speed: ${weatherResults.windSpeed} `);
      }
        })
  }
});

/** SET2
console.log(JSON.stringify(results, undefined, 2));
console.log('Results: ', JSON.stringify(results, undefined, 2));
console.log('Results.latitude: ', JSON.stringify(results.latitude, undefined, 2));
console.log('Results.longitude: ', JSON.stringify(results.longitude, undefined, 2));
**/

/** SET1
  console.log('ERROR:');
  console.log(JSON.stringify(error, undefined, 2));
  console.log('BODY:');
  console.log(JSON.stringify(body, undefined, 2));
  console.log('RESPONSE:');
  console.log(JSON.stringify(response, undefined, 2));**/
