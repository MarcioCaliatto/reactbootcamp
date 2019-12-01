import React, { Component } from "react";

import { Button } from "antd";
import style from "./index.module.css";
import logoImg from "./logo_blue_full.png";
import SingUpModal from "../SignUpModal";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpVisibility: false,
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

  render() {
    return (
      <div>
        <div className={style.rect2} />
        <div className={style.rect1} />
        <header className={style.header}>
          <p className={style.cursos}>Cursos</p>
          <img className={style.logo} alt="" src={logoImg} />
          <h1 className={style.divider}> </h1>
          
          <SingUpModal
            isVisible={this.state.signUpVisibility}
            onCancel={this.handleSignUpCancel}
          />

          <Button
            type="ghost"
            className={style.btnCadastrar}
            onClick={this.handleSignUpVisibility}
            >
            Cadastrar-se
          </Button>

          <Button type="ghost" className={style.btnEntrar}>
            Entrar
          </Button>

        </header>
      </div>
    );
  }
}
