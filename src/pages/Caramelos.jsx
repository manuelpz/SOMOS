import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TarjetaCaramelo from "../components/caramelos/TarjetaCaramelo";
import TarjetaMinizum from "../components/caramelos/TarjetaMinuzum";
import TarjetaNapolitana from "../components/caramelos/TarjetaNapolitana";
import TarjetaPiruletaRedonda from "../components/caramelos/TarjetaPiruletaRedonda";
import TarjetaCarameloBlando from "../components/caramelos/TarjetaCarameloBlando";
import TarjetaGumy from "../components/caramelos/TarjetaGumy";

function Caramelos() {
  return (
    <Container>
      <Row>
        <Col>
          <TarjetaCaramelo />
        </Col>
        <Col>
          <TarjetaMinizum />
        </Col>
        <Col>
          <TarjetaNapolitana />
        </Col>
        
      </Row>
        <Row>
        <Col>
          <TarjetaPiruletaRedonda />
        </Col>
        <Col>
          <TarjetaCarameloBlando />
        </Col>
        <Col>
          <TarjetaGumy />
        </Col>
      </Row>
    </Container>
  );
}

export default Caramelos;
