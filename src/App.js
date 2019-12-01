import React from "react";
<<<<<<< HEAD
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
      <div className="Footer">
        <Footer />
      </div>
    </div>
=======
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/ProfilePage" component={ProfilePage} />
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
>>>>>>> 5dae6efdba284e49b571c716a964b409c415f60d
  );
}

export default App;
