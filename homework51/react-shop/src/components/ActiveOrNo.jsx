import { useRef } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { toast } from 'react-toastify'

function ActiveOrNo() {
  const wasIdle = useRef(false)

  const handleIdle = () => {
    wasIdle.current = true

    toast.info('You have been inactive for 30 seconds')
  }

  const handleActive = () => {
    if (wasIdle.current) {
      toast.success('Welcome back!')
      wasIdle.current = false
    }
  }

  useIdleTimer({
    timeout: 30 * 1000,
    onIdle: handleIdle,
    onActive: handleActive,
  })

  return null
}

export default ActiveOrNo