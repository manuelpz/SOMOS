import React, { useState } from "react";
import cards from "../json/materialOficina.json"
import Carta from "../components/CartaOficina";
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import { Container } from "react-bootstrap";

export default function MaterialOficina() {
    let contador = 0
    const Tarjeta = ({ cards }) => {
        return (
           cards.map((card) => {
                if (card.hasOwnProperty("elementos") && value.input !== "" && (card.elementos.toLowerCase().includes(value.input) || card.elementos.includes(value.input))){
                    return <Carta key={card.id} card={card} />}
                else if (value.input === "") {
                    return <Carta key={card.id} card={card} />  
                    
                }
                else contador++
                if(contador === cards.length)
                        return <h1 key={card.id}>!Lo sentimos! No hemos encontrado "{value.input}"</h1>
                return null
            }
            ))
    }

    const [value, setValue] = useState({ input: ""});
    const seteaValor = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value,
        })
    }
    return (
        <>
            <h1 className="tituloOficina">MATERIAL DE OFICINA</h1>
            <p>Disponemos de más de 3.000 productos de material de oficina para tu empresa. Papelería, material escolar, papelería corporativa, consumibles informáticos y máquinas.Ofrecemos productos de papelería de marcas de gran prestigio.Puedes consultarnos los productos que tenemos disponibles.</p>
            <label className="input"><b><i>¿Buscas algo en concreto?</i></b></label>
            <br />
            <input
                className="input"
                name="input"
                onKeyUp={seteaValor}
                defaultValue={value.input}
                type={"text"}
                placeholder="Tijeras, lápices, sacapuntas..."
            ></input><br />
            <Container>
            <Tarjeta cards={cards}></Tarjeta>
            </Container>
        </>
    );
}