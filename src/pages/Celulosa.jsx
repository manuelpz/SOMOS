import React from "react";
import cards from "../json/celulosa.json"
import CartaCelulosa from "../components/CartaCelulosa";
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import { Container } from "react-bootstrap";

export default function Celulosa() {
    const Tarjeta = ({ cards }) => {
        return (
            cards.map((card) => {
                    return <CartaCelulosa key={card.id} card={card} />
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