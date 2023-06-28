import { Container } from "@mui/system"
import { Col, Row } from "react-bootstrap"
import ReactCardFlip from "react-card-flip"
import Card from "react-bootstrap/Card"
import React, { useState } from "react"
import "../styles/tarjetas.css"

export default function CartaOficina({ card }) {
  const [flip, setFlip] = useState(false)
  const NO_ITEMS = "No hay nada que mostrar aún. disculpe las molestias"
  return (
    <div className="card-flip">
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <Card
          onClick={() => setFlip(!flip)}
          style={{
            width: "18rem",
            height: "18rem",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Card.Title>{card.titulo}</Card.Title>
          <Card.Body className="zoom-effect">
            <Container>
              <Row>
                <Col>
                  {Array.isArray(card.img)
                    ? card.img.map((card, index) => {
                        return (
                          <img
                            key={index}
                            className="img1"
                            src={card.src}
                            alt="Imagen del producto"
                          />
                        )
                      })
                    : null}
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <b>
            <br />
            <i>¡Tócame para saber más!</i>{" "}
          </b>
        </Card>

        <Card
          onClick={() => setFlip(!flip)}
          style={{
            width: "18rem",
            height: "18rem",
            borderRadius: "4px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Card.Body className="card-body-oficina">
            <Card.Text>
              {card.descripcion ? card.descripcion : NO_ITEMS}
            </Card.Text>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    </div>
  )
}
