import React, { Component } from "react";
import {
  Form,
  Input,
  DatePicker,
  Row,
  Col,
} from 'antd';


class SignUpForm extends Component {
  handleOnSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const labelStyling = {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '24px',
      /* identical to box height, or 150% */

      textAlign: 'center',

      /* Gray 4 */

      color: '#BDBDBD'
    }

    return (
      <Form id={this.props.id} onSubmit={this.handleOnSubmit} hideRequiredMark colon={false}>
        <Form.Item label={<label style={labelStyling}>Nome</label>}>
          {getFieldDecorator('firstname', {
            rules: [
              {
                required: true,
                message: "O nome é obrigatório"
              },
              {
                min: 2,
                message: "O nome precisa conter no minímo duas letras"
              }
            ]
          })(<Input placeholder="Digite seu primeiro nome" />)}
        </Form.Item>
        <Form.Item label={<label style={labelStyling}>Sobrenome</label>}>
          {getFieldDecorator('surname', {
            rules: [
              {
                required: true,
                message: "O sobrenome é obrigatório"
              },
              {
                min: 2,
                message: "O nome precisa conter no minímo duas letras"
              }
            ]
          })(<Input placeholder="Digite seu sobrenome" />)}
        </Form.Item>
        <Row >
          <Col span={12}>
            <Form.Item label={<label style={labelStyling}>Data de nascimento</label>}>
              {getFieldDecorator('birthdate', {
                rules: [
                  {
                    required: true,
                    message: "A data de nascimento é obrigatória"
                  }
                ]
              })(<DatePicker style={{display: 'block', marginTop: '4px', marginRight: '15px'}} placeholder="Selecione a data"/>)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label={<label style={labelStyling}>CPF</label>}>
              {getFieldDecorator('cpfnumber', {
                rules: [
                  {
                    required: true,
                    message: "O numero do cpf é obrigatório"
                  }
                ]
              })(<Input size="11" placeholder="Digite seu CPF"/>)}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label={<label style={labelStyling}>Email</label>}>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: "O email é obrigatório"
              }
            ]
          })(<Input placeholder="Digite seu email"/>)}
        </Form.Item>
        <Form.Item label={<label style={labelStyling}>Senha</label>}>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: "A senha é obrigatória"
              }
            ]
          })(<Input placeholder="Digite sua senha" />)}
        </Form.Item>
        <Form.Item label={<label style={labelStyling}>Repita a senha</label>}>
          {getFieldDecorator('passwordConfirm', {
            rules: [
              {
                required: true,
                message: "A senha é obrigatória"
              }
            ]
          })(<Input placeholder="Repita sua senha" />)}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({})(SignUpForm);
