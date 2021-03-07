//import logo from './logo.svg';
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from './components/Pages/Login';


//incorporando elementos de react router los cuales nos 
//permitira saber en que lugar esta
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Cards from './components/Cards/Cards';
//import CardHolder from './components/Cards/CardHolder';



function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <Switch>
          <Route path="/" exact>
            <section>Home</section>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
        </Switch>
      </section>
    </Router>
    
  );
}

export default App;

/*
<CardHolder>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </CardHolder>
*/