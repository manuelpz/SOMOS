import React from "react";
import "../../styles/tarjetas.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import piruletaRedonda from "../../assets/piruletaRedonda.jpg";

function TarjetaPiruletaRedonda() {
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
          <Card.Img variant="top" src={piruletaRedonda} />
          <Card.Body>
            <Card.Title>PIRULETA REDONDA</Card.Title>
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
              Piruleta redonda que vienen envueltas de sabores. Bolsa de 200
              unidades. Sin Gluten
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </ReactCardFlip>
  );
}

export default TarjetaPiruletaRedonda;
