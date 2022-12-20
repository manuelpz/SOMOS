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
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" >
          <img className="logo" src={logo} alt="Logo de la campaña" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link className="borde" eventKey="1" as={Link} to="/">
              <b>Inicio</b>
            </Nav.Link>
            <Nav.Link className="borde" eventKey="2" as={Link} to="/campaña">
              <b>Camapaña</b>
            </Nav.Link>
            <NavDropdown className="borde" title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/caramelos">
                Caramelos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/celulosa">
                Celulosa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mascarillas">
                Mascarillas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/oficina">
                Material de oficina
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey="3" as={Link} to="/contacto">
              <b>Quienes somos</b>
            </Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/contacto">
              <b>Contacto</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
