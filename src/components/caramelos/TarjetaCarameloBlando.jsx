import "../../styles/tarjetas.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import carameloBlando from "../../assets/carameloBlando.jpg";

function TarjetaCarameloBlando() {
  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={carameloBlando} />
      <Card.Body>
        <Card.Title>PIRULETA REDONDA</Card.Title>
        <Card.Text>aramelo blando masticabel sabor fruta bolsa 1kg
        </Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
    
  );
}

export default TarjetaCarameloBlando;

