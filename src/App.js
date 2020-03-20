import React from 'react';
import './App.css';
import Chart from "chart.js";
import Nav from './components/navbar/index';
import Footer from './components/footer/index';
import Home from './pages/homepage/index';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
