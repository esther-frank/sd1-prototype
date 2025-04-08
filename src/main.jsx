import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchPage from './SearchPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import PatternPage from './PatternPage.jsx'
import ProfilePage from './ProfilePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/pattern" element={<PatternPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
