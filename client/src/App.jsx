import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Friends, 
          Groups, 
          Home, 
          Login, 
          Photos, 
          Profile, 
          Register 
        } from './pages'
import { AuthProvider, useAuth } from './utils/AuthContext'

const PrivateRoute = ({element, ...props})=>{
    const {isLoggedIn} =useAuth();
    return isLoggedIn ? element: <Navigate to='/login'/>
}

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/members" element={<PrivateRoute element={<Friends />} />} />
          <Route path="/groups" element={<PrivateRoute element={<Groups />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/photos" element={<PrivateRoute element={<Photos />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
