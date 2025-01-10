import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './scss/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)