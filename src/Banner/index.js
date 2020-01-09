import React, { Component } from "react";
import style from "./index.module.css";
import ilustra from "./img_banner.png";
import { Button } from "antd";
import "../fonts/Poppins-Regular.ttf";

export default class Banner extends Component {
  render() {
    return (
      <div className={style.fullBox}>
        <div className={style.contentBox}>
          <span className={style.contentTitle}>
            O melhor lugar para aprender
          </span>
          <span className={style.contentDescription}>
            A maior seleção de cursos do mundo. Escolha entre mais de 100.000
            cursos em vídeo online a partir de R$19,90
          </span>
          <Button className={style.btnCadastrar}>
            <span className={style.txtBtnCadastrar}>Cadastrar-se</span>
          </Button>
        </div>
        <div className={style.ilustra}>
          <img alt="Banner" src={ilustra} className={style.ilustracao} />
        </div>
      </div>
    );
  }
}
