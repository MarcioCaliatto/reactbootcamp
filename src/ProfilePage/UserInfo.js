import React, { Component } from "react";
import { Button } from "antd";
import style from "./index.module.css";


export default class UserInfo extends Component {
  render() {
    return (
      <div className={style.leftContainer}>
        <span className={style.containerItem}>Nome: {this.props.data.name}</span>
        <span className={style.containerItem}>Data nascimento: {this.props.data.birthdate}</span>
        <span className={style.containerItem}>CPF: {this.props.data.cpf}</span>
        <span className={style.containerItem}>E-mail: {this.props.data.email}</span>
        <span className={style.containerItem}>Senha: chapou né???</span>
        <Button type='ghost' size='large' className={style.botaoEditar}><span className={style.btnEditar}>editar</span></Button>
      </div>
    );
  }
}
