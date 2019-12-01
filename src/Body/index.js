import React, { Component } from "react";
import ListaCursos from "./ListaCursos";

import style from "./index.module.css";
//<h1 className={style.titleGrid}>Nossos cursos</h1>

export default class Body extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.cursosDestaque}>
          <ListaCursos isLoading={false}/>
          <ListaCursos isLoading={false}/>
        </div>
      </div>
    );
  }
}
