import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { Button } from "antd";
import style from "./index.module.css";
import logoImg from "./logo_blue_full.png";
import SingUpModal from "../SignUpModal";
import LoginModal from "../LoginModal";
import CartIcon from "../CartIcon";
import context from "../context";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpVisibility: false,
      loginVisibility: false,
      isOnline: localStorage.getItem("token") ? true : false
    };
  }

  handleSignUpVisibility = () => {
    this.setState({
      signUpVisibility: true
    });
  };

  handleSignUpCancel = () => {
    this.setState({
      signUpVisibility: false
    });
  };

  handleLoginVisibility = () => {
    this.setState({
      loginVisibility: true
    });
  };

  handleLoginCancel = () => {
    this.setState({
      loginVisibility: false
    });
  };

  handleCoursesClick = () => {
    if (this.state.isOnline) this.props.history.push("/ProfilePage");
    else alert("você está offline!");
  };

  render() {
    const countCartItens = this.context.cart.itens.length;
    return (
      <>
        <SingUpModal
          isVisible={this.state.signUpVisibility}
          onCancel={this.handleSignUpCancel}
        />
        <LoginModal
          isVisible={this.state.loginVisibility}
          onCancel={this.handleLoginCancel}
          onSubmit={this.context.handleLogin}
        />

        <header className={style.header}>
          <Link to="/">
            <img className={style.logo} alt="Logo" src={logoImg} />
          </Link>

          <div className={style.container}>
            <span className={style.cursos} onClick={this.handleCoursesClick}>
              Cursos
            </span>
            <div className={style.divider} />

            {this.state.isOnline ? (
              <div>
                <Link to="/">
                  <span
                    className={style.cursos}
                    onClick={this.context.handleLogoff}
                  >
                    sair
                  </span>
                </Link>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  className={style.cursos}
                  onClick={this.handleSignUpVisibility}
                >
                  Cadastrar-se
                </span>

                <Button
                  type="ghost"
                  className={style.btnEntrar}
                  onClick={this.handleLoginVisibility}
                >
                  Entrar
                </Button>
              </div>
            )}

            <Link to="/Checkout" style={{ marginLeft: "35px" }}>
              <CartIcon count={countCartItens} />
            </Link>
          </div>
        </header>
        <div className={style.rect2} />
      </>
    );
  }
}

Header.contextType = context;
export default withRouter(Header);
