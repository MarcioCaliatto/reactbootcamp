import React, { Component } from 'react';
import style from './index.module.css';
import logo from './logo_white_full.png';
import { Icon, Divider } from 'antd';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className={style.blueLine} />
                <div className={style.footer}>
                    <div className={style.boxFooter}>
                        <img className={style.logo} alt="logoWhite" src={logo} />
                        <div className={style.footerOptions}>
                            <span className={style.menuOption}>Politica de Privacidade</span>
                            <span className={style.menuOption}>Cursos</span>
                            <span className={style.menuOption}>Sobre</span>
                            <span className={style.menuOption}>Contato</span>
                            <span className={style.menuOption}>Cadastrar</span>
                            <Divider className={style.divider}type='vertical'/>
                            <span className={style.optionEntrar}>ENTRAR</span>
                        </div>
                    </div>
                    <div className={style.biggerDivider} />
                    <div className={style.rightsAndSocials}>
                        <span className={style.copyrights}>Copyright 2019 Itsam, desenvolvido pela MASTI</span>
                        <div className={style.iconHolder}>
                            <Icon type="facebook" style={{ fontSize: '30px' }} /> <Icon type="instagram" style={{ fontSize: '30px' }} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
