import React from "react"
import cards from "../json/alimentacion.json"
import CartaEstandar from "../components/CartaEstandar"
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import { Container } from "react-bootstrap"
import Headers from "../components/Headers"

export default function Alimentacion() {
  const Tarjeta = ({ cards }) => {
    return cards.map((card) => {
      return <CartaEstandar key={card.id} card={card} />
    })
  }
  return (
    <>
      <Headers
        title="Alimentación - SOMOS A3 Campaña contra el cáncer infantil"
        description=""
        keyWords=""
      />
      <Container>
        <Tarjeta cards={cards}></Tarjeta>
      </Container>
    </>
  )
}
