import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navegationbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Error404 from "./pages/Error404";
import Contacto from "./pages/Contacto";
import Caramelos from "./pages/Caramelos";
import "./styles/footer.css";
import "./styles/carousel.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navegationbar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/caramelos" element={<Caramelos />} />
          <Route  path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
