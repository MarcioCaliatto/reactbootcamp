import React, { Component } from "react";

import { Button } from "antd";
import style from "./index.module.css";
import logoImg from "./logo_blue_full.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className={style.rect2} />
        <div className={style.rect1} />
        <header className={style.header}>
          <p className={style.cursos}>Cursos</p>
          <img className={style.logo} alt="" src={logoImg} />
          <h1 className={style.divider}> </h1>
          <Button type='ghost' className={style.btnEntrar}>Entrar</Button>
          <div className={style.cadastrase}>
            <h1 className={style.txtCadastrase}>Cadastrar-se</h1>
          </div>
        </header>
      </div>
    );
  }
}
