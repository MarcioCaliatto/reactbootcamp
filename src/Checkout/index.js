import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CartContext from "../context";
import Axios from "axios";
import style from "./index.module.css";

import Header from "../Header";
import Footer from "../Footer";
import CartList from "./CartList";
import PaymentForm from "./PaymentForm";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false
    };
  }

  onSubmit = async () => {
    const payLoad = [];

    this.context.cart.itens.forEach(item => {
      return payLoad.push({ id: item });
    });

    const URL = `http://localhost:4000/users/me/courses`;
    await Axios.post(URL, payLoad, {
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(response => {
        localStorage.removeItem("cart");
        this.props.history.push("/ProfilePage");
      })
      .catch(error => {
        switch (error.response.status) {
          case 409: {
            console.log("curso já existe");
            break;
          }
          case 500: {
            console.log("error interno");
            break;
          }
          case 422: {
            console.log("id inexistente");
            break;
          }
          default: {
            console.log("default");
          }
        }
      });
  };

  async componentDidMount() {
    try {
      const response = await Axios.get(`http://localhost:4000/courses/`);
      const cartItens = this.context.cart.itens;

      const itens = [];

      cartItens.forEach(item =>
        response.data.forEach(dataItem => {
          if (item === dataItem.id) itens.push(dataItem);
        })
      );

      this.setState({
        data: itens,
        isLoading: false
      });
    } catch (error) {}
  }

  shouldComponentUpdate(nextState) {
    return this.state.data !== nextState.data;
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />

        <div className={style.divCarrinho}>
          <span className={style.carrinho}>Carrinho</span>
        </div>

        <CartList data={this.state.data} />
        <div className={style.divPagamento}>Pagamento</div>
        <div className={style.paymentContainer}>
          <div className={style.paymentForm}>
            <PaymentForm
              id="paymentForm"
              onSubmit={this.onSubmit}
              visible={true}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Checkout.contextType = CartContext;

export default withRouter(Checkout);
