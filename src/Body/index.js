import React, { Component } from "react";
import ListaCursos from "./ListaCursos";
import style from "./index.module.css";

export default class Body extends Component {
  render() {

    const stylingGridTitle = {
      display: 'flex',
      marginLeft: '32px',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontweight: 600,
      fontSize: '24px',
      lineHeight: '32px',
      /* identical to box height, or 133% */
      marginBottom: '60px',
      letterSpacing: '-1px',

      /* carbon */

      color: '#333333',
    }

    return (
      <div className={style.bodyContainer}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={stylingGridTitle}>Nossos cursos</span>
          <ListaCursos isLoading={false} />
        </div>
      </div>
    );
  }
}
