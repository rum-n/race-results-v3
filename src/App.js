import React from 'react';
import './App.css';
import Nav from './components/navbar/index';
import Footer from './components/footer/index';
import Home from './pages/home';
import About from './pages/about';
import SofiaMarathon from './pages/sofiaMarathon/index';
import SofiaMarathon2016 from './pages/sofiaMarathon/sofiaMarathon2016/index';
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
          <Route path='/sofiamarathon2016' component={SofiaMarathon2016}/>
        </Switch>
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
