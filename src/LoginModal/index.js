import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import LoginForm from '../LoginForm'

import { Modal, Button } from 'antd';

import Axios from 'axios';

class LoginModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: null,
            loginMessage: null
        }
    }

    //Trata o login, método chamado no envio do form de login (email e senha)
    onSubmit = async (values) => {

        const request = {
            "username": values.email,
            "password": values.password
        }

        this.setState({
            isLoading: true
        })

        try {
            const response = await Axios.post('http://localhost:4000/users/login', request)
            localStorage.setItem("token", response.data) //armazena token no localStorage 
            this.props.history.push("/ProfilePage");
        }
        catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                this.setState({
                    loginMessage: "Deu erro! E-mail e/ou senha inválido(s)"
                })
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                this.setState({
                    loginMessage: "Fiz o pedido, mas não me atenderam :("
                })
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
                this.setState({
                    loginMessage: "Não sei o que houve.. Talvez isso te ajude: " + error.message
                })
            }
            console.log(error.config);
        }
        this.setState({
            isLoading: false
        })
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

        const footerStyle = {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }

        const errorMessage = {
            fontSize: 14,
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '32px',
            color: '#2F71FD',
            textAlign: 'center',
        }

        return (
            <div>
                <Modal
                    centered
                    title={<span style={formTitle}>Entrar</span>}
                    visible={this.props.isVisible}
                    onCancel={this.props.onCancel}
                    footer={[
                        <div style={footerStyle}>
                            <Button size='large' block loading={this.state.isLoading}form="loginForm" htmlType="submit" type='primary'>Entrar</Button>
                            <span style={errorMessage}>{this.state.loginMessage}</span>
                        </div>
                    ]}>
                    <LoginForm id="loginForm" onSubmit={this.onSubmit} visible={this.props.isVisible} />
                </Modal>
            </div >);
    }
}

export default withRouter(LoginModal);
