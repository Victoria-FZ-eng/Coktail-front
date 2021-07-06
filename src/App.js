import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import Fav from './Components/Fav.js';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Header />
     
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Fav">
            <Fav />
          </Route>
         
        </Switch>
        <Footer />
      
    </Router>
    )
  }
}

export default App;