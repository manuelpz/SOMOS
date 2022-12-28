import { Container } from "@mui/system";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import Card from "react-bootstrap/Card";
import { useState } from "react";

export default function Carta({ card }) {
  const [flip, setFlip] = useState(false);
  const NO_ITEMS = "No hay nada que mostrar aún. disculpe las molestias"
  return (
    <>
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <Card
          onClick={() => setFlip(!flip)}
          style={{
            width: "18rem",
            height: "auto",
            margin: "20px",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Card.Title>{card.titulo}</Card.Title>
          <Card.Body>
            <Card.Text>
              {card.descripcion}
            </Card.Text>
            <Container>
              <Row>
                <Col>
                  {Array.isArray(card.img)
                    ? card.img.map((card, index) => {
                      return <img key={index}
                        className="img1"
                        src={card.src}
                        alt="Imagen de material de oficina" />
                    }) : null}
                </Col>
              </Row>
            </Container>
            <b>
              <i>¡Tócame para saber más!</i>{" "}
            </b>
          </Card.Body>
        </Card>

        <Card
          onClick={() => setFlip(!flip)}
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
              {Array.isArray(card.back)
                ? card.back.map((card, index) => {
                  return <li key={index}>{card.item}</li>
                }) : NO_ITEMS }
            </Card.Text>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    </>
  )
}
