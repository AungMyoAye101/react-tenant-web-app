import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto px-4'>

      <App />
    </div>
  </StrictMode>,
)
