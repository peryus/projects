import { use } from 'react'

function MessageComponent({ messagePromise }) {
  const message = use(messagePromise)

  return (
      <div>
        <h2>Message Component</h2>
        <p>{message}</p>
      </div>
  )
}

export default MessageComponent