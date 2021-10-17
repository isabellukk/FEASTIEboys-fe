import React from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import feastiewhite from '../images/feastiewhite.png'


function NavBar() {
  return (
      <div>
      <Navbar fixed="top" collapseOnSelect className="navbar">
        <Navbar.Brand href="/">
          <img src="https://cdn3.iconfinder.com/data/icons/food-drinks-and-agriculture-1/64/C_Fork_and_Knife-512.png" height="79px"/><img src={feastiewhite} height="98px" /></Navbar.Brand>
        <Navbar.Toggle />


        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <h3> | </h3>
              <Nav.Link href="/about">About</Nav.Link>
              <h3> | </h3>
              <Nav className="navOptions">
              <Nav.Link href="/pantry">Pantry</Nav.Link>
              <h3> | </h3>
              <Nav.Link href="/inspiration">Inspiration Station</Nav.Link>
              <h3> | </h3>
              <Nav.Link href="/recipes">Recipe Book</Nav.Link>
              </Nav>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      </div>

    )}



export default NavBar
