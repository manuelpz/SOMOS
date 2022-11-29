import { Avatar } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";
import lazo_amarillo from "../assets/lazo_amarillo.png";
import todosCancer from "../assets/cancer-2.png";
import niñaConCancer from "../assets/cancer-3.jpg";
import MyCarousel from "../components/Carousel";
import "../styles/inicio.css";

export default function Inicio() {
  return (
    <div>
      <MyCarousel />
      <div className="cabecera">
        <Row>
          <Col className = "col1">
            <Avatar
              alt="Niño enfermo"
              src={lazo_amarillo}
              sx={{ width: 150, height: 150 }}
              className="avatar"
            />
          </Col>
          <Col className="col2">
            <p className="titulo">PROYECTOS QUE BUSCAN AYUDA</p>
            <p className="sub">Con tu ayuda llegaremos a más peques</p>
            <img src={niñaConCancer} alt="Niña pequeña con cáncer infantil" className="todosCancer"/>
          </Col>
          <Col className="col3">
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
            <img src={todosCancer} alt="Frase de apoyo" className="todosCancer"/>
          </Col>
        </Row>
      </div>
    </div>
  );
}
