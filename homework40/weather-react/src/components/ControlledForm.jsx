import { useState } from 'react'

function ControlledForm({ onSearch }) {
  const [city, setCity] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(city.trim())
  }

  return (
      <section className="component-block">
        <h2>1. Controlled Component</h2>

        <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
          />

          <button type="submit">
            Weather
          </button>
        </form>
      </section>
  )
}

export default ControlledForm