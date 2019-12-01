import React, { Component } from 'react';
import style from './index.module.css';
import { Icon } from 'antd';
import PromoWidget from '../PromoWidget';

export default class Countdown extends Component {
    render() {

        const textStyleNormal = {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '32px',
            /* identical to box height, or 133% */
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-1px',

            /* white */
            color: '#FFFFFF',
        }

        const textStyleBold = {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '32px',
            lineHeight: '48px',
            /* identical to box height, or 150% */
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '-1px',

            /* white */

            color: '#FFFFFF'
        }

        return (
            <div className={style.background} >
                <div className={style.content}>
                    <div className={style.aprendaBox}>
                        <h1 style={textStyleNormal}>Aprenda a programar</h1>
                        <p style={textStyleBold}>Bootcamp React</p>
                    </div>
                    <div className={style.valueBox}>
                        <h1 style={textStyleNormal}>Por apenas</h1>
                        <b style={textStyleBold}>R$ 19,90</b>
                    </div>
                    <div className={style.iconHolder}>
                        <Icon type="history" style={{ color: '#65fadd', fontSize: '40px' }} />
                    </div>
                    <div className={style.timerBox}>
                        <h1 style={textStyleNormal}>Acaba em:</h1>
                        <div style={textStyleBold}>
                            <PromoWidget />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}