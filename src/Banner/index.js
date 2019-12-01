import React, { Component } from "react";
import style from "./index.module.css";
import ilustra from "./img_banner.png";
import { Button } from "antd";
import '../fonts/Poppins-Regular.ttf';

export default class Banner extends Component {
  render() {
    return (
      <div className={style.fullBox}>
        <div className={style.contentBox}>
          <h1 className={style.contentTitle}>O melhor lugar para aprender</h1>
          <h1 className={style.contentDescription}>
            A maior seleção de cursos do mundo. Escolha entre mais de 100.000
            cursos em vídeo online a partir de R$19,90
            </h1>
          <Button className={style.btnCadastrar}><h1 className={style.txtBtnCadastrar}>Cadastrar-se</h1></Button>
        </div>
        <div className={style.ilustra}>
          <img alt="Banner" src={ilustra} className={style.ilustracao} />
        </div>
      </div>
    );
  }
}
