import * as React from "react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../../styles/tarjetas.css";
import Card from "react-bootstrap/Card";

function TarjetaCaramelo() {
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
          <Card.Img variant="top" src={"/caramelos/caramelo-palo.png"} />
          <Card.Body>
            <Card.Title>CARAMELO CON PALO</Card.Title>
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
              Caramelo con palo de combinación de sabores que se mezclan en el
              mismo caramelo 200 und aproximadamente por bolsa. Sin gluten.
            </Card.Text>
          </Card.Body>
        </Card>
    </ReactCardFlip>
  );
}

export default TarjetaCaramelo;
