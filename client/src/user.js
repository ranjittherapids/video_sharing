import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from './App'
import Calluser from './calluser'
export default function user() {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Calluser />} />
      </Routes>
     </BrowserRouter>
  )
}
