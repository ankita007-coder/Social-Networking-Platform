import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/images/logo.png";
import {NavLink} from 'react-router-dom';
import Wrapper from '../assets/css/Navigation';

const NavHead = () => {
  return (
         <Wrapper>
            <Nav>
                <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
                <p>Social Networking For Everyone</p>
            </Nav>
            <Nav>
            <NavLink to='/login' className='link'>
              Login / 
            </NavLink>
            <NavLink to='/register' className='link'>
               Register
            </NavLink>
            </Nav>
            </Wrapper>
            
  )
}



export default NavHead