import React, { Component } from "react";
import "../App.css";
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import Countdown from "../Countdown";
import Body from "../Body";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Header className="Header" />
        <div className="Banner">
          <Banner className="Banner" />
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
      </>
    );
  }
}
