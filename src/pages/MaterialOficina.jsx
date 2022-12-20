import React from "react";
import materialOficina1 from "../assets/materialOficina/materialOficina1.jpg"
import materialOficina2 from "../assets/materialOficina/materialOficina2.jpg"
import materialOficina3 from "../assets/materialOficina/materialOficina3.jpg"
import materialOficina4 from "../assets/materialOficina/materialOficina4.jpg"

export default function MaterialOficina(){
    return(
        <>
    <h1>MATERIAL DE OFICINA</h1>
    <p>Disponemos de más de 3.000 productos de material de oficina para tu empresa. Papelería, material escolar, papelería corporativa, consumibles informáticos y máquinas. Ofrecemos productos de papelería de marcas de gran prestigio.</p>
    <p>
    Puedes consultarnos los productos que tenemos disponibles.</p>
    <img src={materialOficina1} alt="Imagen de material de oficina" />
    <img src={materialOficina2} alt="Imagen de material de oficina" />
    <img src={materialOficina3} alt="Imagen de material de oficina" />
    <img src={materialOficina4} alt="Imagen de material de oficina" />
    </>
    )
    
}
