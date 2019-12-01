import React, { Component } from 'react';
import style from './index.module.css';
import { Icon } from 'antd';
import PromoWidget from '../PromoWidget';

export default class Countdown extends Component {
    render() {
        return (
            <div className={style.content}>
                <h1 className={style.txtAprenda}>Aprenda a programar</h1>
                <p className={style.bootcamp}>Bootcamp React</p>
                <h1 className={style.porApenas}>Por apenas</h1>
                <b className={style.valor}>R$ 19,90</b>
                <div className={style.iconHolder}>
                    <Icon type="history" style={{ color: '#65fadd', fontSize: '40px' }} />
                </div>
                <h1 className={style.acabaem}>Acaba em:</h1>
                <div className={style.PromoWidget}>
                    <PromoWidget />
                </div>
            </div>
        );
    }
}