import React from "react";
import "../../styles/tarjetas.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function TarjetaPiruletaRedonda() {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      
        <Card onClick={() => setFlip(!flip)}
          style={{
            width: "18rem",
            height: "400px",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Card.Img variant="top" src={"/caramelos/piruletaRedonda.jpg"} />
          <Card.Body>
            <Card.Title>PIRULETA REDONDA</Card.Title>
            <b><i>¡Tócame para saber más!</i> </b>
          </Card.Body>
        </Card>
     
     
        <Card onClick={() => setFlip(!flip)}
          style={{
            width: "18rem",
            height: "auto",
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
     
    </ReactCardFlip>
  );
}

export default TarjetaPiruletaRedonda;
