import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import picError500 from './error500.png'

// import { Container } from './styles';

export default class Error500 extends Component {

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
                    <img src={picError500} alt="error500" />
                    <span style={textStyle}>Desculpe, erro interno</span>
                </div>
                <Footer />
            </>
        );
    }
}
