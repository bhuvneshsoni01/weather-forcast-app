import { useState } from "react";
import "../styles/appLayout.css";
import SearchBar from "./searchBar";
import ShowData from "./showingWeatherData";

const AppLayout = () => {
    const [weatherData, setWeatherData] = useState({});
    const [temperatureUnit, setTemperatureUnit] = useState('Celsius');
    const [showWeatherDetails, setShowWeatherDetails] = useState(false);
    
    const handleSearchRequest = async ({city}) => {
        const temp_url = `http://localhost:5000/?city=${city}&unit=${temperatureUnit}`;
        // console.log("Fetching for: ",temp_url)
        await fetch(temp_url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                if(data.city) setShowWeatherDetails(true);
                setWeatherData(data);
            });
    }


    return (
        <div className='container'>
            <h1>Weather App</h1>
            <SearchBar
                handleSearchRequest={handleSearchRequest}
            />
            {showWeatherDetails && <ShowData 
                data={weatherData}
                temperatureUnit={temperatureUnit}
            />}
        </div>
    );
}

export default AppLayout;