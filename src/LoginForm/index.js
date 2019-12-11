import React, { Component } from 'react';
import { Form, Input } from 'antd';

// import { Container } from './styles';

class LoginForm extends Component {

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form

        const textStyle = {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '24px',
            /* identical to box height, or 150% */

            textAlign: 'center',

            /* Gray 4 */

            color: '#BDBDBD',
        }

        return (
            <Form id={this.props.id} onSubmit={this.handleOnSubmit} hideRequiredMark colon={false}>
                <Form.Item label={<span style={textStyle}>Email</span>}>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                required: true,
                                message: "Entre com seu e-mail"
                            },
                            {
                                min: 5,
                                message: "E-mail inválido!"
                            }
                        ]
                    })(<Input placeholder="Digite seu email" />)}
                </Form.Item>

                <Form.Item label={<span style={textStyle}>Senha</span>}>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: "Entre com sua senha!"
                            },
                        ]
                    })(<Input placeholder="Digite sua senha" />)}
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({})(LoginForm);
