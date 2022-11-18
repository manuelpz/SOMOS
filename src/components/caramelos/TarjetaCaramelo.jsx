import * as React from "react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../../styles/tarjetas.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import caramelos from "../../assets/caramelo-palo.png";

function TarjetaCaramelo() {
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
          <Card.Img variant="top" src={caramelos} />
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
              Caramelo con palo de combinación de sabores que se mezclan en el
              mismo // caramelo 200 und aproximadamente por bolsa. Sin gluten.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </ReactCardFlip>
  );
}

export default TarjetaCaramelo;
