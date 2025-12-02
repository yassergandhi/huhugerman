// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

// Validación de seguridad: asegurar que existe el elemento root
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento raíz 'root' en el HTML.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
