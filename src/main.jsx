import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './Router'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
