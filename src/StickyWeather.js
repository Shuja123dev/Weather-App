import axios from 'axios';
import './StickyWeather.css'
import { useEffect, useState } from 'react';

const StickyWeather = ({ city }) => {
  const [weatherData, setWeatherData] = useState({});
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=05590b054cb9f663ff69f863f664158e`;

  const sendRequest = async () => {
    try {
      const response = await axios.get(URL);
      setWeatherData(response.data);
    } catch (error) {
      console.log("Error catching data:", error);
    }
  };

  useEffect(() => {
    sendRequest();
  }, [city]);

  return (
    <div>
      {Object.keys(weatherData).length !== 0 && (
        <div className="sticky-weather">
          <p>{ weatherData.name }</p>
          <p>{ Math.floor((weatherData.main.temp - 32 ) * 5/9) }°C</p>
          <p>{ weatherData.weather[0].description }</p>
        </div>
      )}
    </div>
  );
};

export default StickyWeather;