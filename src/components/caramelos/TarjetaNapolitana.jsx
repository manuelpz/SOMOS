import "../../styles/tarjetas.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import napolitana from "../../assets/napolitana.jpg";

function TarjetaNapolitana() {
  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={napolitana} />
      <Card.Body>
        <Card.Title>NAPOLITANAS DE CHOCOLATE</Card.Title>
        <Card.Text>Bolsa de 1kg , alrededor 230 unidades de deliciosas mini chocolatinas. Contiene dos tipos, una de chocolate negro ( cacao min 60%) y otra de chocolate con leche (cacao min 29%) . Envueltos de manera individual con la palabra gracias en varios idiomas. Ideal para acompañar tu café. Sus medidas son 4 cm de largo X 2.5 cm de ancho.

        </Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
    
  );
}

export default TarjetaNapolitana;

