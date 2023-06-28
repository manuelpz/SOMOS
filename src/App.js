import React from "react"
import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navegationbar from "./components/Navbar"
import Inicio from "./pages/Inicio"
import Error404 from "./pages/Error404"
import Nosotros from "./pages/Quienes_somos"
import Contacto from "./pages/Contacto"
import Caramelos from "./pages/Caramelos"
import MaterialOficina from "./pages/MaterialOficina"
import "./styles/footer.css"
import "./styles/carousel.css"
import Plan from "./pages/Campaña"
import Celulosa from "./pages/Celulosa"
import Guantes from "./pages/Guantes"
import Bolsas from "./pages/Bolsas"
import Higiene from "./pages/Higiene"
import Alimentacion from "./pages/Alimentacion"

function App() {
  return (
    <div className="App">
      <Router>
        <Navegationbar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/plan" element={<Plan />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/caramelos" element={<Caramelos />} />
          <Route exact path="/oficina" element={<MaterialOficina />} />
          <Route exact path="/celulosa" element={<Celulosa />} />
          <Route exact path="/guantes" element={<Guantes />} />
          <Route exact path="/bolsas" element={<Bolsas />} />
          <Route exact path="/higiene" element={<Higiene />} />
          <Route exact path="/alimentacion" element={<Alimentacion />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
