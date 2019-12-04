import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import LoginForm from '../LoginForm'
import { withRouter } from 'react-router-dom'

// import { Container } from './styles';

class LoginModal extends Component {

    //Trata o login, método chamado no envio do form de login (email e senha)
    onSubmit = values => {
        console.log(values);
        //Lógica para consulta no banco afim de validar o usuário
        this.props.history.push("/ProfilePage");
    };

    render() {

        const formTitle = {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '32px',
            /* identical to box height, or 133% */

            textAlign: 'center',
            letterSpacing: '-1px',

            /* blue */

            color: '#2F71FD',
        }
        return (
            <div>
                <Modal
                    centered
                    title={<span style={formTitle}>Entrar</span>}
                    visible={this.props.isVisible}
                    onCancel ={this.props.onCancel}
                    footer={[
                        <Button form="loginForm" htmlType="submit" type='primary'>Entrar</Button>
                    ]}>
                    <LoginForm id="loginForm" onSubmit={this.onSubmit} visible={this.props.isVisible} />
                </Modal>
            </div >);
    }
}

export default withRouter(LoginModal);
