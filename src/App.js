import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Details from './Components/Portfolio/Details/Details';
import Header from './Components/Home/Header/Header';
import Projects from './Components/Projects/Projects';

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
        <Route path="/details/:id" >
          <Details></Details>
        </Route>
        <Route path="/projects" >
          <Projects></Projects>
        </Route>
      </Switch>
      <Route>
        <Footer></Footer>
      </Route>
    </Router>
  );
}

export default App;
