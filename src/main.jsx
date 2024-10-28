import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './Router'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
