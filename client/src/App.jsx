import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Friends, 
          Groups, 
          Home, 
          Login, 
          Photos, 
          Profile, 
          Register 
        } from './pages'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/members' element={<Friends/>}/>
        <Route path='/groups' element={<Groups/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/photos' element={<Photos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
