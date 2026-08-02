function WeatherComponent({ weather, message }) {
  return (
      <section className="component-block">
        <h2>2. Weather Component</h2>

        {message && <p>{message}</p>}

        {!weather && !message && (
            <p>Weather information will appear here</p>
        )}

        {weather && (
            <div className="weather-result">
              <p>City: {weather.name}</p>
              <p>Temperature: {weather.main.temp} °C</p>
              <p>Pressure: {weather.main.pressure}</p>
              <p>Description: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind speed: {weather.wind.speed}</p>
              <p>Wind direction: {weather.wind.deg}°</p>

              <img
                  src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt="Weather icon"
              />
            </div>
        )}
      </section>
  )
}

export default WeatherComponent