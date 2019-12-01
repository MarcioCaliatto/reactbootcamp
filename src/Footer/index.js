import React, { Component } from 'react';
import style from './index.module.css';
import logo from './logo_white_full.png';
import { Icon } from 'antd';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className={style.blueLine} />
                <div className={style.footer}>
                    <div className={style.boxFooter}>
                        <img className={style.logo} alt="logoWhite" src={logo} />
                        <div className={style.footerOptions}>
                            <h1 className={style.menuOption}>Politica de Privacidade</h1>
                            <h1 className={style.menuOption}>Cursos</h1>
                            <h1 className={style.menuOption}>Sobre</h1>
                            <h1 className={style.menuOption}>Contato</h1>
                            <h1 className={style.menuOption}>Cadastrar</h1>
                            <div className={style.divider} />
                            <h1 className={style.optionEntrar}>ENTRAR</h1>
                        </div>
                    </div>
                    <div className={style.biggerDivider} />
                    <div className={style.rightsAndSocials}>
                        <h1 className={style.copyrights}>Copyright 2019 Itsam, desenvolvido pela MASTI</h1>
                        <div className={style.iconHolder}>
                            <Icon type="facebook" style={{ fontSize: '30px' }} /> <Icon type="instagram" style={{ fontSize: '30px' }} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
