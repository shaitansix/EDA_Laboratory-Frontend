import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { FileMetadataProvider } from './context/FileMetadataContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FileMetadataProvider>
      <App />
    </FileMetadataProvider>
  </BrowserRouter>
)