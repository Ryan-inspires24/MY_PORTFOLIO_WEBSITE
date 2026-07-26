import { useState } from 'react'
import HomePage from './pages/landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

  function App() {

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }

export default App
