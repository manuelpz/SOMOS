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
        description="Colabora con SOMOS A3 contra el cancer infantil con la compra de productos de alimentación, bebidas energéticas y otros productos relacionados. Trabajamos siempre con primeras marcas y productos de excelente calidad"
      />
      <Container>
        <Tarjeta cards={cards}></Tarjeta>
      </Container>
    </>
  )
}
