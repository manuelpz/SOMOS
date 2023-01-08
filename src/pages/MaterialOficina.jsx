import React from "react";
import "../styles/materialOficina.css";
import { useState } from "react";
import cards from "../json/materialOficina.json"
import Carta from "../components/CartaOficina";

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
            <label>¿Buscas algo en concreto?</label>
            <br />
            <input
                name="input"
                onKeyUp={seteaValor}
                defaultValue={value.input}
                type={"text"}
                placeholder="Tijeras, lápices, sacapuntas..."
            ></input><br />
            
            <Tarjeta cards={cards}></Tarjeta>
        </>
    );
}