import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register';
import './index.css'
import App from './App.tsx'

registerSW({
  onNeedRefresh() {
    console.log("Nueva versión disponible. Refresca para actualizar.");
  },
  onOfflineReady() {
    console.log("App lista para uso sin conexión ✅");
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
