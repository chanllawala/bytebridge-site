import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import bytebridgeLogo from './assets/Bytebridge website logo.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Replace default Vite favicon with ByteBridge logo at runtime
(() => {
  const existing = document.querySelector('link[rel="icon"]')
  const link = existing || document.createElement('link')
  link.setAttribute('rel', 'icon')
  link.setAttribute('type', 'image/png')
  link.setAttribute('href', bytebridgeLogo)
  if (!existing) {
    document.head.appendChild(link)
  }
})()
