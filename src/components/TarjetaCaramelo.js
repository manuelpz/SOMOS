import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import caramelos from "../assets/caramelo-palo.png";

function TarjetaCaramelo() {
  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={caramelos} />
      <Card.Body>
        <Card.Title>CARAMELO CON PALO</Card.Title>
        <Card.Text>
          Caramelo con palo de combinación de sabores que se mezclan en el mismo
          caramelo 200 und aproximadamente por bolsa. Sin gluten.
        </Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
    
  );
}

export default TarjetaCaramelo;

