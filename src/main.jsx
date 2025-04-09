import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import App from './App.jsx'
import 'react-day-picker/dist/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
