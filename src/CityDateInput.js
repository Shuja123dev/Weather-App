import './CityDateInput.css';

export function CityDateInput(props) {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  console.log(props.weatherData)
  return (
    <div id="city-date-input-container">
      <div id="city-name-date-container">
        <p id="city-name">{props.city}</p>
        <p id="date">{formattedDate}</p>
      </div>
      <div id="input-container">
        <input
          type="text"
          onChange={props.handleInputChange}
          placeholder="Enter City"
          id="city-input"
        ></input>
        <button type="input" onClick={props.onButtonClick} id="search-city-button">
          Search
        </button>
        
      </div>
    </div>
  );
}