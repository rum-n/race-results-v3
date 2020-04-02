import React from 'react';
import './App.css';
import Chart from "chart.js";
import Nav from './components/navbar/index';
import Footer from './components/footer/index';
import Home from './pages/homepage/index';
import About from './pages/about/index';
import SofiaMarathon from './pages/sofiaMarathon/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/sofiamarathon' component={SofiaMarathon}/>
        </Switch>
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
