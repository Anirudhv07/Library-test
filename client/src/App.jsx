import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Allbooks from './Pages/Allbooks'
import AllMembers from './Pages/AllMembers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/TotalBooks' element={<Allbooks />} />

    <Route path='/TotalMembers' element={<AllMembers />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App
