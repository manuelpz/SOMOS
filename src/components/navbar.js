import React from "react"
import logo from "../assets/LOGO-SOMOS-A3.png"
import "../styles/navbar.css"
import "@fontsource/dancing-script";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navegationbar(){
    return(
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img className="logo" src= {logo} alt = "Logo de la campaña"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><b>Home</b></Nav.Link>
            <Nav.Link href="#action2"><b>Link</b></Nav.Link>
           
            <Nav.Link href="#"><b>Link</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}