import React from "react";
import cards from "../json/bolsas.json"
import CartaEstandar from "../components/CartaEstandar";
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import { Container } from "react-bootstrap";

export default function Bolsas() {
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
            </Container>
        </div>
    );
}