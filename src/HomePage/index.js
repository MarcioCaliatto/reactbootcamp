import React, { Component } from "react";
import context from "../context";
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import Countdown from "../Countdown";
import Body from "../Body";

export default class HomePage extends Component {
  render() {
    if (this.context.isOnline)
      return (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      );
    else
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

HomePage.contextType = context;
