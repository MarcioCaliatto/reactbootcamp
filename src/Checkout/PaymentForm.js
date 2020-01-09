import React, { Component } from "react";
import { Form, Input, Button } from "antd";

// import { Container } from './styles';

class PaymentForm extends Component {
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

    const textStyle = {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "24px",
      /* identical to box height, or 150% */

      textAlign: "center",

      /* Gray 4 */

      color: "#BDBDBD"
    };

    const titleStyle = {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "32px",
      /* identical to box height, or 133% */
			marginBottom: '40px',
      letterSpacing: "-1px",

      /* blue */

      color: "#2F71FD"
    };

    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={titleStyle}>Cartão</div>
        <Form
          id={this.props.id}
          onSubmit={this.handleOnSubmit}
          hideRequiredMark
          colon={false}
        >
          <Form.Item label={<span style={textStyle}>Nome</span>}>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Digite o nome igual no cartão"
                },
                {
                  min: 5,
                  message: "Verifique seu nome"
                }
              ]
            })(<Input placeholder="Digite o nome igual no cartão" />)}
          </Form.Item>

          <Form.Item label={<span style={textStyle}>Número do Cartão</span>}>
            {getFieldDecorator("cardnum", {
              rules: [
                {
                  required: true,
                  message: "Entre com o número do cartão"
                }
              ]
            })(<Input placeholder="0000 - 0000 - 0000 - 0000" />)}
          </Form.Item>
          <div style={{display: 'flex'}}>
					<Form.Item label={<span style={textStyle}>Data de Expiração</span>}>
            {getFieldDecorator("expiredate", {
              rules: [
                {
                  required: true,
                  message: "Entre com a data de validade"
                }
              ]
            })(<Input placeholder="____/____/____" />)}
          </Form.Item>

					<Form.Item label={<span style={textStyle}>CCV</span>}>
            {getFieldDecorator("cardcvv", {
              rules: [
                {
                  required: true,
                  message: "Entre com o código de segurança"
                }
              ]
            })(<Input placeholder="000" />)}
          </Form.Item>
          </div>
          <Form.Item >
            <Button size='large' block type="primary" onClick={this.handleOnSubmit}>Finalizar</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({})(PaymentForm);
