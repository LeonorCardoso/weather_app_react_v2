import React from "react";
import Weather from "./Weather.js";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
