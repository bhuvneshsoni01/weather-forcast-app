// import { Express } from "express";
// import request from "request";
const Express = require("express");
const request = require("request");


const App = Express();
const api_key = '812dafbcf6ece97388b52e72e2ee1aec';

App.get('/', (req,res) => {
    const city = req.query.city;
	var request = require('request');
	request(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
		function(error, response, body, city) {
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
				// res.send(`${data}`)
				res.send(`The weather in your city "${city}" is ${data.list[0].weather[0].description}`);
			}
		}
	);
});


App.listen(3000, () => console.log("Server running on port: 3000"))