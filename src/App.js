import './App.css';
import Footer from './components/footer';
import Navegationbar from './components/navbar';
import Home from './components/home';
import MyCarousel from './components/carousel';
import "./styles/footer.css"
import "./styles/carousel.css"


function App() {
  return (
   <div className="App">
      <header className="App-header">
        <Navegationbar />
      </header>
      <section className="Seccion">
        <MyCarousel />
      </section>
      <section>
        <Home />
      </section>
        <Footer />
    </div>
  );
}

export default App;
