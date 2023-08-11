import React from "react"
import cards from "../json/bolsas.json"
import CartaEstandar from "../components/CartaEstandar"
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import { Container } from "react-bootstrap"
import Headers from "../components/Headers"

export default function Bolsas() {
  const Tarjeta = ({ cards }) => {
    return cards.map((card) => {
      return <CartaEstandar key={card.id} card={card} />
    })
  }
  return (
    <div>
      <Headers
        title="Bolsas - SOMOS A3 Campaña contra el cáncer infantil"
        description="Colabora con SOMOS A3 contra el cancer infantil con la compra de bolsas de basura industriales, domésticas, de polietilino, bolsas de plástico... tanto para uso industrial como uso personal"
      />
      <Container>
        <Tarjeta cards={cards}></Tarjeta>
      </Container>
    </div>
  )
}
