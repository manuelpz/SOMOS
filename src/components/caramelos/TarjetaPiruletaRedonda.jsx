import "../../styles/tarjetas.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import piruletaRedonda from "../../assets/piruletaRedonda.jpg";

function TarjetaPiruletaRedonda() {
  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={piruletaRedonda} />
      <Card.Body>
        <Card.Title>PIRULETA REDONDA</Card.Title>
        <Card.Text>Piruleta redonda que vienen envueltas de sabores. Bolsa de 200 unidades. Sin Gluten 
        </Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
    
  );
}

export default TarjetaPiruletaRedonda;

