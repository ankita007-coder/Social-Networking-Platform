import React, { useState } from 'react'
import { NavHead } from '../components'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/css/RegisterAndLogin'

const Register = () => {
  const [email,setEmail] =  useState('');
  return (
    <Wrapper>
      <NavHead/>
      <div className='form'>
      <form>
      <div>
          <label for="fullName">Enter your full name <span>*</span></label>
        </div>
        <div>
        <input type="text" 
                name="fullName" 
                id="fullName" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
          <label for="city">Enter your city<span>*</span></label>
        </div>
        <div>
        <input type="text" 
                name="city" 
                id="city" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
          <label for="state">Enter your state<span>*</span></label>
        </div>
        <div>
        <input type="text" 
                name="state" 
                id="state" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
          <label for="gender">Enter your gender<span>*</span></label>
        </div>
        <div>
        <input type="text" 
                name="gender" 
                id="gender" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
          <label for="profession">Enter your profession<span>*</span></label>
        </div>
        <div>
        <input type="text" 
                name="profession" 
                id="profession" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
          <label for="email">Enter a username <span>*</span></label>
        </div>
        <div>
        <input type="text" 
                name="userName" 
                id="userName" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
        <label for="email">Enter your email<span>*</span></label>
        </div>
        <div>
        <input type="email" 
                name="email" 
                id="email" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
        <label for="password">Enter the password <span>*</span></label>
        </div>
        <div>
        <input type="password" 
                name="password" 
                id="password" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
        <label for="conPassword">Confirm your password<span>*</span></label>
        </div>
        <div>
        <input type="password" 
                name="conPassword" 
                id="conPassword" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
          <input type='submit' value="Login"/>
        </div>
      </form>
      <div><p>Already a member? <Link to="/login" className='link'><span>Login</span></Link></p></div>
      </div>
    </Wrapper>
  )
}



export default Register