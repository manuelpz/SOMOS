import React from "react"
import cards from "../json/celulosa.json"
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
        title="Celulosa - Pañuelos, servilletas, papel higienico  - SOMOS A3 Campaña contra el cáncer infantil"
        description="Colabora con SOMOS A3 contra el cancer infantil con la compra de productos tan cotidianos como pueden ser el papel higiénico, servilletas, pañuelos, bobina... Gracias a tu colaboración hacemos que nuestra misión sea posible"
      />
      <Container>
        <Tarjeta cards={cards}></Tarjeta>
      </Container>
    </>
  )
}
