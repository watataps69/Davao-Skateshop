import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ads from './pages/Ads'
import Social from './pages/Social'
import About from './pages/About'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/social" element={<Social />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}