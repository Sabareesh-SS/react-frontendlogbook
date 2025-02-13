import React from 'react'
import Loginpage from './pages/Loginpage'
import { Route, Routes } from 'react-router-dom'
import Logpage from './pages/Logpage'

export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/react-frontendlogbook/" element={<Loginpage />} />
        <Route path="/logpage" element={<Logpage />} />
      </Routes>
    </div>
  )
}
