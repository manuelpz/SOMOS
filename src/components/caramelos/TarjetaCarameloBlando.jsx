import React from "react";
import "../../styles/tarjetas.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import pikotas from "../../assets/pikotas.jpg";

function TarjetaCarameloBlando() {
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
          <Card.Img variant="top" src={pikotas} />
          <Card.Body>
            <Card.Title>PIKOTAS</Card.Title>
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
              Estas Deliciosas Pikotas nos sorprendieron y conquistaron en los años 90, Bolitas deliciosas de caramelo blando con intenso sabor a Cereza. ¿Quien no las adora?
            </Card.Text>
          </Card.Body>
        </Card>
  
    </ReactCardFlip>
  );
}

export default TarjetaCarameloBlando;
