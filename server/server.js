// import { Express } from "express";
// import request from "request";
const Express = require("express");
const cors = require('cors');


const api_key = '812dafbcf6ece97388b52e72e2ee1aec';

const App = Express();
App.use(cors({
	origin: 'http://localhost:3000',
}))

App.get('/', async (req,res) => {
    const city = req.query.city;
	const unit = req.query.unit == 'Celsius' ? 'metric':(req.query.unit == 'Kelvin' ? 'standard' : 'imperial');

	try{
		await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=812dafbcf6ece97388b52e72e2ee1aec`)
			.then(response => response.json())
			.then((data) => {
				const reqData = {
				 weatherDescription : data.weather[0].description,
				 weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
				 temperature : data.main.temp,
				 humidity : data.main.humidity,
				 city: data.name,
				}
				res.send(JSON.stringify(reqData));
			})
	}catch(err){
		res.send(err)
	}
});


App.listen(5000, () => console.log("Server running on port: 5000"))