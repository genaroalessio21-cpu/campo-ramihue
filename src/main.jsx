import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

// Registrar service worker para PWA/offline
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('Hay una nueva versión de la app disponible. ¿Actualizar?')) {
      updateSW(true)
    }
  },
  onOfflineReady() {
    console.log('Campo Ramihue lista para usar sin internet')
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
