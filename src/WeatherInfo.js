import './WeatherInfo.css'
import { OtherDetails } from './OtherDetails.js'

export function WeatherInfo (props){
    return (
        <div id="weather-info-container">
            <div id="icon-temperature-description-container">
                <div id="icon-container">
                    { props.weatherData.main && (
                        <img src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}.png`} id="curent-weather-icon" alt="Current Weather Icon"/>
                    )}
                </div>
                <div id="temperature-description-container">
                    <div id="temperature-container">
                        {props.weatherData.main && (
                            <p id="current-temperature">{Math.round(props.weatherData.main.temp - 273.15)}°C</p>
                        )}
                    </div>
                    <div id="description-container">
                        { props.weatherData.main && (
                            <p id="current-weather-descripion">{props.weatherData.weather[0].description}</p>
                        )}
                    </div>
                </div>

            </div>
            <OtherDetails weatherData={props.weatherData}>fsd</OtherDetails>
        </div>
    )
}