import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Carousel from './components/carousel';


function App() {
  return (
   <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <section>
        <Carousel />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
