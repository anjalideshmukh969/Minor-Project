import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Register from './pages/Register'
import Login from "./pages/Login"

const App = () => {
  return (
    <Routes>
      <Route path='/Register' element={<Register/>} />
      <Route path='/Login' element={<Login/>} />
    </Routes>
  )
}

export default App