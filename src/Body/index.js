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
}
