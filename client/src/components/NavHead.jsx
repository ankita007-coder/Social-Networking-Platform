import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/images/logo.png";
import styled from "styled-components";
const NavHead = () => {
  return (
         <Wrapper>
            <Nav>
                <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
                <p>Social Networking For Everyone</p>
            </Nav>
            <Nav>
                <Nav.Link href="#deets" className='link'>More deets</Nav.Link>
            <Nav.Link href="#memes" className='link'>
              Dank memes
            </Nav.Link>
            </Nav>
            </Wrapper>
            
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between; 
    background-color: #082e54;
    padding: 10px;

    p{
        color: white;
    }

`

export default NavHead