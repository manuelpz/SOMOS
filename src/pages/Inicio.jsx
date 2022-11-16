import { Avatar } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";
import lazo_amarillo from "../assets/lazo_amarillo.png";
import MyCarousel from "../components/Carousel";
import "../styles/inicio.css";

export default function Inicio() {
  return (
    <div>
      <MyCarousel />
      <div className="cabecera">
        <Row>
          <Col>
            <Avatar
              alt="Niño enfermo"
              src={lazo_amarillo}
              sx={{ width: 150, height: 150 }}
              className="avatar"
            />
          </Col>
          <Col className="block">
            <p className="titulo">PROYECTOS QUE BUSCAN AYUDA</p>
            <p className="sub">Con tu ayuda llegaremos a más peques</p>
          </Col>
          <Col className="finalBlock">
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
          </Col>
        </Row>
      </div>
    </div>
  );
}
