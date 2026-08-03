import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Modal from 'react-modal'
import App from './App.jsx'
import './index.css'
import 'react-datepicker/dist/react-datepicker.css'

Modal.setAppElement('#root')

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />

        <ToastContainer
            position="top-right"
            autoClose={2500}
        />
      </BrowserRouter>
    </StrictMode>,
)