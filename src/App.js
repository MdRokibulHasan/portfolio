import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <Home></Home>
        </Route>
        <Route exact path="/contact">
          <Home></Home>
        </Route>
        <Route exact path="/portfolio">
          <Home></Home>
        </Route>
      </Switch>
      <Route>
        <Footer></Footer>
      </Route>
    </Router>
  );
}

export default App;
