// import { Express } from "express";
// import request from "request";
const Express = require("express");
const request = require("request");


const App = Express();
const api_key = '812dafbcf6ece97388b52e72e2ee1aec';

App.get('/', async (req,res) => {
    const city = req.query.city;
	// request(
	// 	`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`,
	// 	function(error, response, body, city) {
	// 		// let data = JSON.parse(body);
	// 		if (response.statusCode === 200) {
	// 			// res.send(`${data}`)
	// 			console.log(body)
	// 			res.send(body);
	// 		}
	// 	}
	// );
	try{
		const body = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=812dafbcf6ece97388b52e72e2ee1aec`)
			.then(response => response.json());
		res.send(body);
	}catch(err){
		res.send(err)
	}
});


App.listen(5000, () => console.log("Server running on port: 5000"))