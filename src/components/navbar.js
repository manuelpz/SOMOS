import React from "react";
import logo from "../assets/LOGO-SOMOS-A3.png";
import "../styles/navbar.css";
import "@fontsource/dancing-script";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

export default function Navegationbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo} alt="Logo de la campaña" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              <b>Inicio</b>
            </Nav.Link>
            <Nav.Link as={Link} to="/camapaña">
              <b>Camapaña</b>
            </Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/caramelos">
                Caramelos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/celulosa">
                Celulosa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mascarillas">
                Mascarillas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">
              <b>Contacto</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
