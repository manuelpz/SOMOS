import React from "react"
import "../styles/navbar.css"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import { NavDropdown } from "react-bootstrap"

export default function Navegationbar() {
  return (
    <Navbar className="text-md" collapseOnSelect bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            className="logo"
            src={"/LOGO-SOMOS-A3.webp"}
            alt="Logo de la campaña"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="text-lg text-uppercase">
            <Nav.Link className="borde md:mr-16" eventKey="1" as={Link} to="/">
              <b>Inicio</b>
            </Nav.Link>
            <Nav.Link className="borde md:mr-16" eventKey="2" as={Link} to="/plan">
              <b>Campaña</b>
            </Nav.Link>
            <Nav.Link className="md:mr-16" eventKey="3" as={Link} to="/nosotros">
              <b>Quienes somos</b>
            </Nav.Link>
            <NavDropdown
              className="borde md:mr-16"
              title="Productos"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item as={Link} to="/caramelos">
                Caramelos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/alimentacion">
                Alimentación y bebidas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/oficina">
                Material de oficina
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bolsas">
                Bolsas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guantes">
                Guantes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/celulosa">
                Celulosa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/higiene">
                Higiene
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="md:mr-16" eventKey="4" as={Link} to="/contacto">
              <b>Contacto</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
