import "../../styles/tarjetas.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import gumy from "../../assets/gumy.jpg";

function TarjetaGumy() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={gumy} />
      <Card.Body>
        <Card.Title>GUMMY</Card.Title>
        <Card.Text>
          Los caramelos de goma Gummy Jelly, son los auténticos Gummy de toda la
          vida, sorprendentes por su textura blandita y agradable y deliciosos
          por su increíble sabor surtido de frutas. Surtido de sabores frutales
          (fresa, naranja, limón, piña). Cada unidad viene envuelta
          individualmente. Media aproximada de cada gummy de 3 x 1,5 cm. Los
          caramelos no contienen gluten.
        </Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
  );
}

export default TarjetaGumy;
