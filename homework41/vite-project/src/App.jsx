import { Suspense } from 'react'
import MessageComponent from './components/MessageComponent'

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data received from the Promise!')
    }, 2000)
  })
}

const messagePromise = getMessage( )

function App() {
  return (
      <div>
        <h1>React use() Example</h1>

        <Suspense fallback={<p>Loading</p>}>
          <MessageComponent messagePromise={messagePromise} />
        </Suspense>
      </div>
  )
}

export default App