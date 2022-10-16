import React from "react"
import logo from "../assets/LOGO-SOMOS-A3.jpg"
import "../styles/navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <img src={logo} alt= "Logo de la campaña" className="logo"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="d">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="d">Productos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="d">Información</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="d">Contáctanos</a>
      </li>
    </ul>
  </div>
</nav>
    )
}