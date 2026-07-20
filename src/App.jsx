import { useState } from 'react'
import HomePage from './pages/landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import
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
import { BrowserRouter } from 'react-router-dom'

export default App
