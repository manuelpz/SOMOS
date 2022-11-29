import React from "react";
import "../../styles/tarjetas.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import sugu from "../../assets/sugu.jpg";

function TarjetaSugus() {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      
        <Card onClick={() => setFlip(!flip)}
          style={{
            width: "18rem",
            height: "400px",
            margin: "20px",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Card.Img variant="top" src={sugu} />
          <Card.Body>
            <Card.Title>SUGUS</Card.Title>
            <b><i>¡Tócame para saber más!</i> </b>
          </Card.Body>
        </Card>
     
     
        <Card onClick={() => setFlip(!flip)}
          style={{
            width: "18rem",
            height: "auto",
            margin: "20px",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Card.Body>
            <Card.Text>
              {" "}
              Caramelo blando masticable sabor fruta bolsa 1kg
            </Card.Text>
          </Card.Body>
        </Card>
     
    </ReactCardFlip>
  );
}

export default TarjetaSugus;
