import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import picMaintenance from './maintenance.png'

// import { Container } from './styles';

export default class Maitenance extends Component {

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render() {
        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '171px'
        }

        const textStyle = {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '32px',
            lineHeight: '48px',
            /* identical to box height, or 150% */

            textAlign: 'center',
            letterSpacing: '-1px',

            /* blue */

            color: '#2F71FD',
        }

        return (
            <>
                <Header />
                <div style={containerStyle}>
                    <img src={picMaintenance} alt="maintenance" />
                    <span style={textStyle}>Desculpe, página em manutenção</span>
                </div>
                <Footer />
            </>
        );
    }
}
