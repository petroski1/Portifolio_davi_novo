import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './fontes'
import './index.css'

const raiz = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Em produção o HTML já vem pré-renderizado (scripts/prerender.mjs).
if (raiz.hasChildNodes() && raiz.firstChild?.nodeType === Node.ELEMENT_NODE) hydrateRoot(raiz, app)
else createRoot(raiz).render(app)
