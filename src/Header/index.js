import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

import { Button } from "antd";
import style from "./index.module.css";
import logoImg from "./logo_blue_full.png";
import SingUpModal from "../SignUpModal";
import LoginModal from "../LoginModal";

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      signUpVisibility: false,
      loginVisibility: false
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


  render() {
    return (
      <>
        <SingUpModal
          isVisible={this.state.signUpVisibility}
          onCancel={this.handleSignUpCancel}
        />
        <LoginModal
          isVisible={this.state.loginVisibility}
          onCancel={this.handleLoginCancel}
        />

        <header className={style.header}>
          <img
            className={style.logo}
            alt="Masti Logo"
            src={logoImg}
          />

          <div className={style.container}>
            <span className={style.cursos}>Cursos</span>
            <div className={style.divider} />
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
        </header>
        <div className={style.rect2} />
      </>
    );
  }
}
