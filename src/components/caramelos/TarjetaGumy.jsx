import React from "react";
import "../../styles/tarjetas.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function TarjetaGumy() {
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
          <Card.Img variant="top" src={"/caramelos/gumy.jpg"} />
          <Card.Body>
            <Card.Title>GUMMY</Card.Title>
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
              Los caramelos de goma Gummy Jelly, son los auténticos Gummy de
              toda la vida, sorprendentes por su textura blandita y agradable
              y deliciosos por su increíble sabor surtido de frutas. Surtido
              de sabores frutales (fresa, naranja, limón, piña). Cada unidad
              viene envuelta individualmente. Media aproximada de cada gummy
              de 3 x 1,5 cm. Los caramelos no contienen gluten.
            </Card.Text>
          </Card.Body>
        </Card>
     
    </ReactCardFlip>
  );
  // return (
  //   <Card style={{ width: "18rem" }}>
  //     <Card.Img variant="top" src={gumy} />
  //     <Card.Body>
  //       <Card.Title>GUMMY</Card.Title>
  //       <Card.Text>
  //         Los caramelos de goma Gummy Jelly, son los auténticos Gummy de toda la
  //         vida, sorprendentes por su textura blandita y agradable y deliciosos
  //         por su increíble sabor surtido de frutas. Surtido de sabores frutales
  //         (fresa, naranja, limón, piña). Cada unidad viene envuelta
  //         individualmente. Media aproximada de cada gummy de 3 x 1,5 cm. Los
  //         caramelos no contienen gluten.
  //       </Card.Text>
  //       <Button variant="primary">Más información</Button>
  //     </Card.Body>
  //   </Card>
  // );
}

export default TarjetaGumy;
