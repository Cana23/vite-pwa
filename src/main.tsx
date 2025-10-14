import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("✅ Service Worker registrado"))
      .catch((err) => console.log("❌ Error registrando SW:", err));
  });
}

// Notificaciones
if ("Notification" in window) {
  Notification.requestPermission().then((result) => {
    console.log("Permiso de notificación:", result);
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
