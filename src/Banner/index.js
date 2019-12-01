import React, { Component } from "react";
import style from "./index.module.css";
import ilustra from "./img_banner.png";
import { Button } from "antd";
import '../fonts/Poppins-Regular.ttf';

export default class Banner extends Component {
  render() {
    return (
      <>
        <div className={style.fullBox}>
          <div className={style.contentBox}>
            <h1 className={style.contentTitle}>O melhor lugar para aprender</h1>
            <h1 className={style.contentDescription}>
              A maior seleção de cursos do mundo. Escolha entre mais de 100.000
              cursos em vídeo online a partir de R$19,90
            </h1> 
<<<<<<< HEAD
            <Button className={style.btnCadastrar}><text className={style.txtBtnCadastrar}>Cadastrar-se</text></Button>
=======
            <Button className={style.btnCadastrar}><h1 className={style.txtBtnCadastrar}>Cadastrar-se</h1></Button>
>>>>>>> 5dae6efdba284e49b571c716a964b409c415f60d
          </div>
          <div className={style.ilustra}>
            <img alt="Banner" src={ilustra} className={style.ilustracao} />
          </div>
        </div>
      </>
    );
  }
}
