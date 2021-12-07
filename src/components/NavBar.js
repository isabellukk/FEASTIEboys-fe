import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import feastiewhite from '../images/feastiewhite.png'

function NavBar() {
  return (
    <div>

    <Navbar fixed="top" collapseOnSelect="collapseOnSelect" className="navbar">
      <Navbar.Brand href="/">
        <img src="https://cdn3.iconfinder.com/data/icons/food-drinks-and-agriculture-1/64/C_Fork_and_Knife-512.png" height="79px" alt=""/><img src={feastiewhite} height="98px" alt=""/>
      </Navbar.Brand>



        <Nav className="me-auto">
            <Nav.Link href="/"><strong>Home</strong>
            </Nav.Link>

            <Nav.Link href="/pantry"><strong>Pantry</strong>
            </Nav.Link>

            <Nav.Link href="/inspiration"><strong>Inspiration Station</strong>
            </Nav.Link>

            <Nav.Link href="/recipes"><strong>Recipe Book</strong>
            </Nav.Link>

            <Nav.Link href="/cocktails"><strong>Cocktails</strong>
            </Nav.Link>
          </Nav>
    </Navbar>

  </div>
)}

export default NavBar
