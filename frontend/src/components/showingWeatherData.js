import '../styles/showingWeatherData.css'

const ShowData = ({data,temperatureUnit}) => {

    const tempUnit = temperatureUnit == 'Celsius' ? '°C' : (temperatureUnit == 'Kelvin' ? 'K' : '°F');
    // console.log(data);
    return (
        <>
            <img id='weatherIcon' src ={data.weatherIcon}/>
            <h1 className='weatherData'>{data.temperature}{tempUnit}</h1>
            <h4 className='weatherData'>{data.city}</h4>
            <p className='weatherData'>Humidity: {data.humidity}</p>
            <p>Weather condition for the city '{data.city}' is, {data.weatherDescription}.</p>
        </>
    );
}

export default ShowData;