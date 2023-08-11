import React from "react"
import cards from "../json/higiene.json"
import CartaEstandar from "../components/CartaEstandar"
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import "../styles/higiene.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Headers from "../components/Headers"

export default function Higiene() {
  const Tarjeta = ({ cards }) => {
    return cards.map((card) => {
      return <CartaEstandar key={card.id} card={card} />
    })
  }
  return (
    <div>
      <Headers
        title="Caramelos y gominolas - SOMOS A3 Campaña contra el cáncer infantil"
        description="Colabora con SOMOS A3 contra el cancer infantil con la compra de productos de caramelos, gominolas, piruletas, chocolates... Trabajamos siempre con primeras marcas y productos de excelente calidad"
      />
      <Container>
        <h2 className="disponibilidadProductos">
          Disponemos de múltiples productos de limpieza para su empresa o su
          hogar, para más información consultemos.
        </h2>
        <Tarjeta cards={cards}></Tarjeta>
        <Link
          className="flex justify-center items-center !no-underline"
          to={"/contacto"}
        >
          <button className="cssbuttons-io-button ">
            {" "}
            ¡Contactar!
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </div>
          </button>
        </Link>
      </Container>
    </div>
  )
}
