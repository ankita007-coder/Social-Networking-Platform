import React, { useState } from 'react'
import { NavHead } from '../components'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/css/RegisterAndLogin';

const Login = () => {
  const [email,setEmail] = useState('');
  console.log(email)
  return (
    <Wrapper>
      <NavHead/>
      <div className='form'>
      <form>
        <div>
          <label for="email">Enter your email <span>*</span></label>
        </div>
        <div>
        <input type="email" 
                name="email" 
                id="email" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
        <label for="email">Enter the password <span>*</span></label>
        </div>
        <div>
        <input type="email" 
                name="password" 
                id="password" 
                onChange={(e)=>setEmail(e.target.value)}
              required/>
        </div>
        <div>
          <input type='submit' value="Login"/>
        </div>
      </form>
      <div><p>New User? <Link to="/register" className='link'><span>Register</span></Link></p></div>
      </div>
    </Wrapper>

  )
}


export default Login