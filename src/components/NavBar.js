import React, { useState, useEffect } from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import feastiewhite from '../images/feastiewhite.png'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"


const NavBar = props => {
    const { userId } = useParams()



  return(
      <>
      <Navbar fixed="top" collapseOnSelect className="navbar">
        <Navbar.Brand href="/:userId/home">
          <img src="https://cdn3.iconfinder.com/data/icons/food-drinks-and-agriculture-1/64/C_Fork_and_Knife-512.png" height="98px"/><img src={feastiewhite} height="98px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />


        <Navbar.Collapse id="collasible-nav-dropdown">
          <Nav className="me-auto">
            <Nav>
              <Nav.Link href={`/${userId}/pantry`}>Pantry</Nav.Link>
               <Nav.Link href={`/${userId}/inspiration`}>Inspiration Station</Nav.Link>
               <Nav.Link href={`/${userId}/recipes`}>Recipes</Nav.Link>



            </Nav>
          </Nav>
          <Nav>
            <Nav.Link href={"/"}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      </>

    )}



export default NavBar
