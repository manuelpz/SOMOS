import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navegationbar from "./components/Navbar";
import MyCarousel from "./components/Carousel";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";
import "./styles/footer.css";
import "./styles/carousel.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navegationbar />
       <MyCarousel />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/productos" element={<Productos />} />
          <Route  path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
