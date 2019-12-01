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
  //        <div className={style.rect2} />

  render() {
    return (
      <>
        <SingUpModal
          isVisible={this.state.signUpVisibility}
          onCancel={this.handleSignUpCancel}
        />

        <header className={style.header}>
          <img className={style.logo} alt="" src={logoImg} />

          <div className={style.container}>
            <h1 className={style.cursos}>Cursos</h1>
            <div className={style.divider}/>
            <h1
              className={style.cursos}
              onClick={this.handleSignUpVisibility}
            >
              Cadastrar-se
          </h1> 

            <Button type="ghost" className={style.btnEntrar}>
              Entrar
          </Button>
          </div>
        </header>
      </>
    );
  }
}
