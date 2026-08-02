import { useState } from 'react'
import ControlledForm from './components/ControlledForm'
import WeatherComponent from './components/WeatherComponent'
import UncontrolledForm from './components/UncontrolledForm'

const API_KEY = '5d066958a60d315387d9492393935c19'

function App() {
  const [weather, setWeather] = useState(null)
  const [message, setMessage] = useState('')

  async function getWeather(cityName) {
    try {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`,
      )

      if (!response.ok) {
        return null
      }

      return await response.json()
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async function handleSearch(cityName) {
    if (cityName === '') {
      setWeather(null)
      setMessage('Enter city name')
      return
    }

    const data = await getWeather(cityName)

    if (data === null) {
      setWeather(null)
      setMessage('City not found')
      return
    }

    setMessage('')
    setWeather(data)
  }

  return (
      <main>
        <h1>Weather App</h1>

        <ControlledForm onSearch={handleSearch} />

        <WeatherComponent
            weather={weather}
            message={message}
        />

        <UncontrolledForm />
      </main>
  )
}

export default App