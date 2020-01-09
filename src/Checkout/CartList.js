import React, { Component } from "react";
import CartContext from "../context";
import style from "./index.module.css";

import { Spin } from "antd";
import CartItem from "./CartItem";

export default class CartList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null
    };
  }

  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  render() {
    const CartList = this.props.data.map(item => {
      return (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          thumbnail={item.thumbnail}
          onClick={() => this.context.cart.removeItem(item.id)}
        />
      );
    });
    if (this.state.isLoading)
      return <Spin spinning={this.state.isLoading} size="large" />;
    else return <div className={style.listContainer}>{CartList}</div>;
  }
}

CartList.contextType = CartContext;
