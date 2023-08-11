import React from "react"
import cards from "../json/caramelos.json"
import CartaEstandar from "../components/CartaEstandar"
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import { Container } from "react-bootstrap"
import Headers from "../components/Headers"

export default function Celulosa() {
  const Tarjeta = ({ cards }) => {
    return cards.map((card) => {
      return <CartaEstandar key={card.id} card={card} />
    })
  }
  return (
    <>
      <Headers
        title="Caramelos y gominolas - SOMOS A3 Campaña contra el cáncer infantil"
        description="Colabora con SOMOS A3 contra el cancer infantil con la compra de productos de caramelos, gominolas, piruletas, chocolates... Trabajamos siempre con primeras marcas y productos de excelente calidad"
      />
      <Container>
        <Tarjeta cards={cards}></Tarjeta>
      </Container>
    </>
  )
}
