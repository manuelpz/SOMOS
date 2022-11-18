import * as React from "react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../../styles/tarjetas.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import minizum from "../../assets/minizum.jpg";

function TarjetaMinizum() {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <div onClick={() => setFlip(!flip)}>
        <Card
          style={{
            width: "18rem",
            height: "400px",
            margin: "20px",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Card.Img variant="top" src={minizum} />
          <Card.Body>
            <Card.Title>MINIZUM</Card.Title>
            <Button variant="primary">Más información</Button>
          </Card.Body>
        </Card>
      </div>
      <div onClick={() => setFlip(!flip)}>
        <Card
          style={{
            width: "18rem",
            height: "400px",
            margin: "20px",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Card.Body>
            <Card.Text>
              {" "}
              Para los amantes de lo tradicional. Con un surtido muy completo de
              sabores de frutas entre los que se encuentran: melón, naranja,
              piña, mora, fresa y limón. Presentados en una bolsa de un kilo y
              envueltos individualmente. En cada bolsa hay 430 unidades
              aproximadamente. Elaborados SIN GLUTEN y con colorantes naturales.
              Son unos caramelos excelentes
              para pasar un buen rato y disfrutar de sabores intenso.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </ReactCardFlip>
  );
}

export default TarjetaMinizum;
