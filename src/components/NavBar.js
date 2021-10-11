import React from 'react'
import NavigationOptions from './NavigationOptions'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import whitefeast from '../images/whitefeast.png'


function NavBar() {

  return (

      <div>
        <NavigationOptions />
      <Navbar fixed="top" collapseOnSelect expand="lg left" bg="dark" variant="dark" className="navbar">
        <Container>
        <Navbar.Brand href="/">
          <img src="https://cdn3.iconfinder.com/data/icons/food-drinks-and-agriculture-1/64/C_Fork_and_Knife-512.png" height="70px"/><img src={whitefeast} height="70px" />away</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />


        <Navbar.Collapse id="responsive-navbar-nav collasible-nav-dropdown">
          <Nav className="me-auto">
            <NavDropdown title="More" className="dropMore">
              <NavDropdown.Item href="/pantry">Pantry</NavDropdown.Item>
              <NavDropdown.Item href="/recipes">Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/inspiration">Inspiration Station</NavDropdown.Item>

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
