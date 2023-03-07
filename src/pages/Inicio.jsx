import { Avatar } from "@mui/material";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyCarousel from "../components/Carousel";
import "../styles/inicio.css";
import "../App.css";

export default function Inicio() {
  return (
    <div className="content">
      <MyCarousel />
      <div className="cabecera">
        <Container fluid="md">
        <Row>
          <Col sm className = "col1">
            <Avatar
              alt="Niño enfermo"
              src={"/inicio/lazo_amarillo.png"}
              sx={{ width: 150, height: 150 }}
              className="avatar"
            />
          </Col>
          <Col sm className="col2">
            <p className="titulo">PROYECTOS QUE BUSCAN AYUDA</p>
            <p className="sub">Con tu ayuda llegaremos a más peques</p>
            <img src={"/inicio/cancer-3.jpg"} alt="Niña pequeña con cáncer infantil" className="todosCancer"/>
          </Col>
          <Col sm className="col3">
            <p>
              Trabajamos con la convicción de que nuestro trabajo aporta a
              mejorar la situación de cientos de personas que se ven precisadas
              de ayuda.
            </p>
            <p>
              {" "}
              Los productos que encontrará en nuestra empresa siempre será de
              primeras marcas y con una garantía de total satisfacción.{" "}
            </p>
            <p>
              {" "}
              A través de la compra de nuestros productos, estará colaborando
              con Asociaciones de carácter humanitario
            </p>
            <img src={"/inicio/cancer-2.png"} alt="Frase de apoyo" className="todosCancer"/>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
}
