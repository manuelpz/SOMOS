import React from "react";
import logo from "../assets/LOGO-SOMOS-A3.png";
import Carousel from 'react-bootstrap/Carousel';
import "../styles/navbar.css";

export default function MyCarousel(){
    return(
      <Carousel className = "carrusel">
      <Carousel.Item className= "Item">
        <img
          className="d-block w-1 imgCarrusel"
          src={logo}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1 imgCarrusel"
          src={logo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-1 imgCarrusel"
          src={logo}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}