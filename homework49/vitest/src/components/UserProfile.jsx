import { useEffect, useState } from 'react'
import axios from 'axios'

function UserProfile() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users/1',
        )

        setUser(response.data)
      } catch {
        setError('Failed to load user')
      } finally {
        setIsLoading(false)
      }
    }

    getUser()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p role="alert">{error}</p>
  }

  return (
      <section>
        <h2>User profile</h2>

        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </section>
  )
}

export default UserProfile