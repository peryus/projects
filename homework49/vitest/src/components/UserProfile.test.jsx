import '@testing-library/jest-dom/vitest'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import axios from 'axios'
import UserProfile from './UserProfile'

vi.mock('axios')

describe('UserProfile', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows loading indicator while request is pending', () => {
    axios.get.mockReturnValue(new Promise(() => {}))

    render(<UserProfile />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('shows user data after successful request', async () => {
    axios.get.mockResolvedValue({
      data: {
        name: 'John Smith',
        email: 'john@example.com',
        phone: '123-456-7890',
      },
    })

    render(<UserProfile />)

    expect(await screen.findByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('123-456-7890')).toBeInTheDocument()
  })

  it('shows error message when request fails', async () => {
    axios.get.mockRejectedValue(new Error('Request failed'))

    render(<UserProfile />)

    expect(
        await screen.findByRole('alert'),
    ).toHaveTextContent('Failed to load user')
  })
})