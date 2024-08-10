import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import{ BrowserRouter } from 'react-router-dom'
import './index.css'
import ErrorBoundary from './component/ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ErrorBoundary>
<BrowserRouter>
<App />
</BrowserRouter>
</ErrorBoundary>
  </React.StrictMode>,
)
