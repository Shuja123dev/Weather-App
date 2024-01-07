import './OtherDetails.css'

export function OtherDetails(props){
    return(
        <div id="other-details-container">
            <div className="other-detail-container">
                {props.weatherData.main && (
                    <p id="temp-max" className="other-detail-numbers">{Math.round(props.weatherData.main.temp_max - 273.15)}°C</p>
                )}
                <p className="other-detail-description">High</p>
            </div>
            <div id="feels-like" className="other-detail-container">
                {props.weatherData.main && (
                    <p className="other-detail-numbers">{Math.round(props.weatherData.main.feels_like - 273.15)}°C</p>
                )}
                <p className="other-detail-description">Feels like</p>
            </div>
            <div id="humidity" className="other-detail-container">
                {props.weatherData.main && (
                    <p className="other-detail-numbers">{props.weatherData.main.humidity}%</p>
                )}
                <p className="other-detail-description">Humidity</p>
            </div>
            <div id="temp-min" className="other-detail-container">
                {props.weatherData.main && (
                    <p className="other-detail-numbers">{Math.round(props.weatherData.main.temp_min - 273.15)}°C</p>
                )}
                <p className="other-detail-description">Low</p>
            </div>
            <div id="wind-speed" className="other-detail-container">
                {props.weatherData.main && (
                    <p className="other-detail-numbers">{Math.round(props.weatherData.wind.speed)} km/h</p>
                )}
                <p className="other-detail-description">Wind</p>
            </div>
            <div id="pressure" className="other-detail-container">
                {props.weatherData.main && (
                    <p className="other-detail-numbers">{props.weatherData.main.pressure} mb</p>
                )}
                <p className="other-detail-description">Pressure</p>
            </div>
        </div>
    )
}