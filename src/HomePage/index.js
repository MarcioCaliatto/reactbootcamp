import React, { Component } from "react";
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import Countdown from "../Countdown";
import Body from "../Body";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Countdown />
        <Body />
        <Footer />
      </div>
    );
  }
}
