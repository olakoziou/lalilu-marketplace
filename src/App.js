import Container from './components/Container';
import ProductGrid from './components/products/smallCardGrid/ProductGrid';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <ProductGrid />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
