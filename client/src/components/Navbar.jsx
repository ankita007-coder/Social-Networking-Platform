import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" 
                      className='link' 
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#e7e7e7': '',
                      })}>Home</NavLink>
            <NavLink to="/members" 
                      className='link'
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#e7e7e7': '',
                      })}>Members</NavLink>
            <NavLink to="/groups" 
                      className='link'
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#e7e7e7': '',
                      })}>Groups</NavLink>
            <NavLink to="/photos" 
                      className='link'
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#e7e7e7': '',
                      })}>Photos</NavLink>
            <NavLink to="/profile" 
                      className='link'
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? '#e7e7e7': '',
                      })}>Profile</NavLink>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  )
}

export default NavBar