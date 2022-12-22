import React from "react";
import "../styles/materialOficina.css";
import { useState } from "react";
import cards from "../json/materialOficina.json"
import Carta from "../components/CartaOficina";

export default function MaterialOficina() {
    const Tarjeta = ({ cards }) => {
        return (
            cards.map((card) => {
                if (value.input !== "" && (card.titulo.toLowerCase().includes(value.input) || card.titulo.includes(value.input)))
                    return <Carta key={card.id} card={card} />

                else if (value.input === "") {
                    return <Carta key={card.id} card={card} />
                }
                return null
            }))
    }


    const [value, setValue] = useState({ input: "" });
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
                placeholder="Tijeras, papel, bolígrafos..."
            ></input>
            <Tarjeta cards={cards}></Tarjeta>
        </>
    );
}