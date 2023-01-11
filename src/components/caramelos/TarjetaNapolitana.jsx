import React from "react";
import "../../styles/tarjetas.css"
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function TarjetaNapolitana() {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
   
        <Card  onClick={() => setFlip(!flip)} style={{
            width: "18rem",
            height: "400px",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Card.Img variant="top" src={"/caramelos/napolitana.jpg"} />
          <Card.Body>
          <Card.Title>NAPOLITANA DE CHOCOLATE</Card.Title>
          <b><i>¡Tócame para saber más!</i> </b>
          </Card.Body>
        </Card>
      
    
        <Card onClick={() => setFlip(!flip)} style={{
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
              Bolsa de 1kg , alrededor 230 unidades de deliciosas mini
              chocolatinas. Contiene dos tipos, una de chocolate negro ( cacao
              min 60%) y otra de chocolate con leche (cacao min 29%) . Envueltos
              de manera individual con la palabra gracias en varios idiomas.
              Ideal para acompañar tu café. Sus medidas son 4 cm de largo X 2.5
              cm de ancho.
            </Card.Text>
          </Card.Body>
        </Card>
     
    </ReactCardFlip>
  );
}

export default TarjetaNapolitana;

