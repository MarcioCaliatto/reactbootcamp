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
            letterSpacing: '-1px',

            /* white */

            color: '#FFFFFF'
        }
        
        //<PromoWidget />

        return (
            <div className={style.background} >
                <div className={style.aprendaBox}>
                    <span style={textStyleNormal}>Aprenda a programar</span>
                    <span style={textStyleBold}>Bootcamp React</span>
                </div>
                <div className={style.valueBox}>
                    <span style={textStyleNormal}>Por apenas</span>
                    <span style={textStyleBold}>R$ 19,90</span>
                </div>

                <div className={style.timerBox}>
                    <Icon type="history" style={{ color: '#65fadd', fontSize: '40px' }} />
                    <span style={textStyleNormal}>Acaba em:</span>
                    <div style={textStyleBold}>
                    </div>
                </div>
            </div>
        );
    }
}