import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import MyCarousel from "../components/Carousel"
import "../styles/inicio.css"
import "../App.css"
import Headers from "../components/Headers"

export default function Inicio() {
  return (
    <div className="content">
      <Headers
        title="Inicio - SOMOS A3 Campaña contra el cáncer infantil"
        description="Somos una empresa que realizamos actividades comerciales realizando campañas de ayuda para asociaciones necesitadas ofertando los productos que realmente creemos que le pueden ir bien a su empresa para así poder ayudar."
      />
      <MyCarousel />
      <div className="cabecera">
        <Container fluid="md">
          <Row>
            <Col sm className="col1">
              <img
                alt="Niña pasa tiempo con su mamá en terapia"
                src={"/inicio/mama-pasa-tiempo-su-hijo-mientras-terapia.jpg"}
                sx={{ width: 250, height: 250 }}
                className="avatar"
              />
              <p className="sub">
                "Los verdaderos superhéroes no usan capas, son pequeños y con
                muchos sueños, los verdaderos héroes son niños que pelean con
                fuerza por su vida contra un malévolo enemigo que no podrá
                vencerlos"
              </p>
              <p className="sub2">¡Día mundial contra el cáncer infantil!</p>
            </Col>
            <Col sm className="col2">
              <p className="titulo">PROYECTOS QUE BUSCAN AYUDA</p>
              <p className="sub">Con tu ayuda llegaremos a más peques</p>
              <br />
              <img
                src={"/inicio/nino-cinta-amarilla.jpg"}
                alt="Niña pequeña con cáncer infantil"
                className="todosCancer"
              />
            </Col>
            <Col sm className="col3">
              <p>
                Trabajamos con la convicción de que nuestro trabajo aporta a
                mejorar la situación de cientos de personas que se ven
                precisadas de ayuda.
              </p>
              <p>
                {" "}
                Los productos que encontrará en nuestra empresa siempre será de
                primeras marcas y con una garantía de total satisfacción.{" "}
              </p>
              <p>
                {" "}
                A través de la compra de nuestros productos, estará colaborando
                con asociaciones de carácter humanitario
              </p>
              <img
                src={"/inicio/cancer-2.avif"}
                alt="Frase de apoyo"
                className="todosCancer"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
