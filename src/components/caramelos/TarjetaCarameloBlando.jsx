import React from "react";
import "../../styles/tarjetas.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import carameloBlando from "../../assets/carameloBlando.jpg";

function TarjetaCarameloBlando() {
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
          <Card.Img variant="top" src={carameloBlando} />
          <Card.Body>
            <Card.Title>CARAMELO BLANDO</Card.Title>
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
              Caramelo blando masticabel sabor fruta bolsa 1kg
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </ReactCardFlip>
  );
}

export default TarjetaCarameloBlando;
