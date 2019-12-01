<<<<<<< HEAD
import React, { Component } from 'react';
import ListaCursos from './ListaCursos';

import style from './index.module.css';

export default class Body extends Component {
    render() {
        return <>
            <h1 className={style.titleGrid}>Nossos cursos</h1>
            <div className={style.cursosDestaque}>
                <ListaCursos />
                <ListaCursos />
            </div>
        </>;
    }
=======
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
>>>>>>> 5dae6efdba284e49b571c716a964b409c415f60d
}
