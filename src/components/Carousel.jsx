import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../styles/navbar.css";

export default function MyCarousel(){
    return(
      <Carousel className = "carrusel">
      <Carousel.Item className= "Item">
        <img
          className="d-block w-1 imgCarrusel"
          src={"/carousel/solidaridad-lila.png"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1 imgCarrusel boligrafos"
          src={"/carousel/boligrafos.png"}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1 imgCarrusel"
          src={"/carousel/solidaridad-multicolor.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}