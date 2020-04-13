const request = require('request');
const argv = require('yargs').argv;

let apiKey = '85c0433f76e47f5dfc0634e62b5a88f6';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        //console.log('body:', body);
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});