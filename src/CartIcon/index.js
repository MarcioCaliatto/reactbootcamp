import React, { Component } from 'react';
import { Badge, Icon } from 'antd';
class CartIcon extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props != nextProps
  }

  render() {
    const { count } = this.props;
    return (
      <Badge count={count} showZero={true} >
        <Icon onClick={this.props.onClick} type="shopping-cart" style={{ fontSize: '36px' }} />
      </Badge>
    );
  }
}

export default CartIcon;