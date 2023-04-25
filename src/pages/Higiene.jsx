import React from "react";
import cards from "../json/higiene.json"
import CartaEstandar from "../components/CartaEstandar";
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import "../styles/higiene.css"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Higiene() {
    const Tarjeta = ({ cards }) => {
        return (
            cards.map((card) => {
                return <CartaEstandar key={card.id} card={card} />
            }
            ))
    }
    return (
        <div>
            <Container>
                <Tarjeta cards={cards}></Tarjeta>
            <h1 className="disponibilidadProductos">Disponemos de múltiples productos de limpieza para su empresa o su hogar, para más información consultemos.</h1>
            <Link to={"/contacto"}><button className="btn btn-outline-dark">¡Quiero contactar!</button></Link>
            </Container>

        </div>
    )
}