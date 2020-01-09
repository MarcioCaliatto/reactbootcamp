import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import context from "./context";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import CoursePage from "./CoursePage";
import Course from "./Course";
import Maitenance from "./errors/maintenance";
import Error500 from "./errors/error500";
import Error404 from "./errors/error404";
import Checkout from "./Checkout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: {
        itens: [],
        addItem: this.addItem,
        removeItem: this.removeItem
      },
      isOnline: localStorage.getItem("token") ? true : false,
      handleLogoff: this.handleLogoff
    };
  }

  async componentDidMount() {
    this.setState(state => {
      state.cart.itens = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")).itens
        : [];
      return state;
    });
  }

  addItem = item => {
    this.setState(state => {
      state.cart.itens.push(item);
      localStorage.setItem("cart", JSON.stringify({ itens: state.cart.itens }));
      return state;
    });
  };

  removeItem = removeItem => {
    this.setState(state => {
      const cart = state.cart.itens.filter(item => {
        return item !== removeItem;
      });
      localStorage.setItem("cart", JSON.stringify({ itens: cart }));
      return state;
    });
  };

  handleLogoff = () => {
    console.log("clicked");
    localStorage.removeItem("token");
    this.setState({
      isOnline: false
    });
  };

  shouldComponentUpdate(nextState) {
    return this.state.isOnline !== nextState.isOnline;
  }

  render() {
    return (
      <BrowserRouter>
        <context.Provider value={this.state}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/ProfilePage" component={ProfilePage} />
            <Route path="/CoursePage/:id" component={CoursePage} />
            <Route path="/Course/:id" component={Course} />
            <Route path="/Maintenance" component={Maitenance} />
            <Route path="/Error404" component={Error404} />
            <Route path="/Error500" component={Error500} />
            <Route path="/Checkout" component={Checkout} />
          </Switch>
        </context.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
