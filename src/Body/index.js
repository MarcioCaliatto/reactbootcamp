import React, { Component } from "react";
import ListaCursos from "./ListaCursos";
import style from "./index.module.css";

export default class Body extends Component {
  render() {

    const stylingGridTitle = {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontweight: 600,
      fontSize: '24px',
      lineHeight: '32px',
      /* identical to box height, or 133% */
      marginLeft: '32px',
      marginBottom: '60px',
      letterSpacing: '-1px',

      /* carbon */

      color: '#333333',
    }

    return (
      <div className={style.bodyContainer} >
        <h1 style={stylingGridTitle}>Nossos cursos</h1>
        <div style={{ paddingRight: '30px' }}>
          <ListaCursos isLoading={false} />
          <ListaCursos isLoading={false} />
        </div>
      </div>
    );
  }
}
