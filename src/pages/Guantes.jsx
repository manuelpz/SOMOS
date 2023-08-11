import React from "react"
import cards from "../json/guantes.json"
import CartaEstandar from "../components/CartaEstandar"
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import { Container } from "react-bootstrap"
import Headers from "../components/Headers"

export default function Guantes() {
  const Tarjeta = ({ cards }) => {
    return cards.map((card) => {
      return <CartaEstandar key={card.id} card={card} />
    })
  }
  return (
    <div>
      <Headers
        title="Guantes - SOMOS A3 Campaña contra el cáncer infantil"
        description="Colabora con SOMOS A3 contra el cancer infantil con la compra de productos de guantes de todas las clases: desechables, latex, nitrilo ... Trabajamos siempre con primeras marcas y productos de excelente calidad. Pídenos que te enviemos más información si lo deseas"
      />
      <Container>
        <Tarjeta cards={cards}></Tarjeta>
      </Container>
    </div>
  )
}
