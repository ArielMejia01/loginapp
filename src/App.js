import logo from './logo.svg';
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Cards from './components/cards/Cards';
import CardHolder from './components/cards/CardHolder';

function App() {
  return (
    <section>
      <NavBar></NavBar>
      <h1>Hola puto mundo</h1>
      <CardHolder>
        <Cards></Cards>
      </CardHolder>
      
      
    </section>

  );
}

export default App;
