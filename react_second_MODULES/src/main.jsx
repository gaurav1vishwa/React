import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyHeader from "./components/navbar.jsx";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
