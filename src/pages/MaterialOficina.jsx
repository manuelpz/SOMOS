import React, { useState, useEffect } from "react";
import cards from "../json/materialOficina.json"
import CartaOficina from "../components/CartaOficina";
import "../styles/tarjetas.css"
import "../styles/oficina.css"
import { Container } from "react-bootstrap";

export default function MaterialOficina() {
    const [value, setValue] = useState({ input: "" })
    const [cardList, setCardList] = useState ([])
    const [hayProducto, setHayProducto] = useState(false)
    const checkInput = () => {
        if (value.input !== "") {
            const newList = cards.filter(card => card.hasOwnProperty("elementos") && (card.elementos.toLowerCase().includes(value.input) || card.elementos.includes(value.input)))
            setCardList(newList);
            setHayProducto(true)
        }
        else if (value.input === "") {
            const newList = cards
            setCardList(newList);
            setHayProducto(false)
        }
        else {
            setCardList([])
            setHayProducto(false)
        }
    }

    useEffect(() => {
        checkInput()
    }, [value.input, checkInput]);

    const limpia = () =>{
        setValue({ input: "" })
        setCardList([])
        checkInput()
    }


    return (
        <>
            <h1 className="tituloOficina">MATERIAL DE OFICINA</h1>
            <p>Disponemos de más de 3.000 productos de material de oficina para tu empresa. Papelería, material escolar, papelería corporativa, consumibles informáticos y máquinas.Ofrecemos productos de papelería de marcas de gran prestigio.Puedes consultarnos los productos que tenemos disponibles.</p>
            <label className="input"><b><i>¿Buscas algo en concreto?</i></b></label>
            <br />
            <div className="input ">
                <input type="text" id="first_name" className="bg-white border-2 border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-2 p-2.5 dark:bg-gray-700 dark:border-gray dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:h-1/5 lg:w-1/5 h-3/5 w-3/5" placeholder="Grapas, gomas, sacapuntas..." value={value.input} onChange={e =>{
                    setValue({ input: e.target.value })
                   }} />
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={limpia} >X</button>
            </div>
            <br />
            <Container>
                {cardList.length > 0 ? (
                    <>
                        {hayProducto ? <h1>¡Disponemos del producto <b>{value.input}</b> ✅!</h1> :"" }   
                <ul>
                    {cardList.map(card => <CartaOficina key={card.id} card={card} />)}
                    
                </ul>
                    </>
                    ): (
                        <h1>Lo sentimos, no disponemos de "{value.input}" ❌ </h1>
                )}
            </Container>
        </>
    );
}