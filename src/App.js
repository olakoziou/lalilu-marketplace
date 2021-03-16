import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <HomePage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
