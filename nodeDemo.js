const request = require('request');

const options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/statistics',
  headers: {
    'x-rapidapi-key': 'dcab7cf4a8mshebe0b1c9fd71d1bp1da46djsn8a2996cbb4d4',
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});