import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TarjetaCaramelo from "../components/TarjetaCaramelo";

function Caramelos() {
  return (
    <Container>
      <Row>
        <Col>
          <TarjetaCaramelo />
        </Col>
        <Col>
          <TarjetaCaramelo />
        </Col>
        <Col>
          <TarjetaCaramelo />
        </Col>
        
      </Row>
        <Row>
        <Col>
          <TarjetaCaramelo />
        </Col>
        <Col>
          <TarjetaCaramelo />
        </Col>
        <Col>
          <TarjetaCaramelo />
        </Col>
        
      </Row>
    </Container>
  );
}

export default Caramelos;
