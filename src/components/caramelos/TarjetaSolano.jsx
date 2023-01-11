import React from "react";
import "../../styles/tarjetas.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function TarjetaSolano() {
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
            <Card.Img variant="top" src={"/caramelos/solano.jpg"} />
            <Card.Body>
              <Card.Title>CARAMELOS SOLANO</Card.Title>
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
                Bolsa con 330 caramelos del tradicional sabor a café con leche. Un suave y cremoso sabor, sin azúcar; de la marca Solano
                Aunque las especialidades de la marca son por tradición los caramelos de café con leche, con el tiempo han ido desarrollando otros sabores, como los caramelos de menta y nata, o los de mouse de limón. Así como los de sabor cappuccino o los de café expreso que reinventan las pastillas originales.
              </Card.Text>
            </Card.Body>
          </Card>
       
      </ReactCardFlip>
    );
  }
  
  export default TarjetaSolano;