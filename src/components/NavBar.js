import React from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import feastiewhite from '../images/feastiewhite.png'
import styled from 'styled-components'


function NavBar() {


  return (

      <div>

      <Navbar fixed="top" collapseOnSelect bg="dark" variant="dark" className="navbar">
        <Container>
        <Navbar.Brand href="/">
          <img src="https://cdn3.iconfinder.com/data/icons/food-drinks-and-agriculture-1/64/C_Fork_and_Knife-512.png" height="70px"/><img src={feastiewhite} height="100px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />


        <Navbar.Collapse id="responsive-navbar-nav collasible-nav-dropdown">
          <Nav className="me-auto">
            <NavDropdown title="More" className="dropMore">
              <NavDropdown.Item href="/pantry">Pantry</NavDropdown.Item>
              <NavDropdown.Item href="/inspiration">Inspiration Station</NavDropdown.Item>
              <NavDropdown.Item href="/recipes">Recipes</NavDropdown.Item>


            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/auth/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/auth/logout">Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      </div>

    )}



export default NavBar
