import { useRef } from 'react'

function UncontrolledForm() {
  const favoriteCityRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()

    const favoriteCity = favoriteCityRef.current.value.trim()

    if (favoriteCity === '') {
      alert('Enter favorite city')
      return
    }

    alert(`Favorite city: ${favoriteCity}`)
    favoriteCityRef.current.value = ''
  }

  return (
      <section className="component-block">
        <h2>3. Uncontrolled Component</h2>

        <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Enter favorite city"
              ref={favoriteCityRef}
          />

          <button type="submit">
            Save city
          </button>
        </form>
      </section>
  )
}

export default UncontrolledForm