import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Modal from 'react-modal'
import App from './App.jsx'
import { store } from './app/store.js'
import './index.css'
import 'react-datepicker/dist/react-datepicker.css'

Modal.setAppElement('#root')

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />

          <ToastContainer
              position="top-right"
              autoClose={2500}
          />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
)