import React from "react";
import boligrafos from "../assets/boligrafos.png";
import manosColor from "../assets/solidaridad-multicolor.jpg";
import manosVioleta from "../assets/solidaridad-lila.png";
import Carousel from 'react-bootstrap/Carousel';
import "../styles/navbar.css";

export default function MyCarousel(){
    return(
      <Carousel className = "carrusel">
      <Carousel.Item className= "Item">
        <img
          className="d-block w-1 imgCarrusel"
          src={manosVioleta}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1 imgCarrusel boligrafos"
          src={boligrafos}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1 imgCarrusel"
          src={manosColor}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}