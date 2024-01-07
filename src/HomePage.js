import { CityDateInput } from "./CityDateInput.js"
import "./HomePage.css"
import { WeatherInfo } from "./WeatherInfo.js"


export function HomePage(props){

    return (
        <div id="main-content-contanier">
        <CityDateInput city={props.city} 
        weatherData={props.weatherData} 
        handleInputChange={props.handleInputChange} 
        onButtonClick={props.onButtonClick}
        ></CityDateInput>
        <WeatherInfo weatherData={props.weatherData}>

        </WeatherInfo>
        </div>
    )
}