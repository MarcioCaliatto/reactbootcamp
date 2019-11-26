import React from "react";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import Countdown from './Countdown';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Banner">
        <Banner />
      </div>
      <div className="Countdown">
        <Countdown />
      </div>
      <div className="Body"> 
        <Body />
      </div>
    </div>
  );
}

export default App;
