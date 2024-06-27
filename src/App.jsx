import './App.scss'
import About from './pages/About/About'
import Dashboard from './pages/Dashboard/Dashboard'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

