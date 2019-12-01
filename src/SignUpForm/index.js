import React, { Component } from "react";
import { Form } from "antd";
import { Input } from "antd";

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

    return (
      <Form id={this.props.id} onSubmit={this.handleOnSubmit}>
        <Form.Item>
          {getFieldDecorator('surname', {
            rules: [
              {
                required: true,
                message: "O nome é obrigatório"
              }
            ]
          })(<Input placeholder="Digite seu nome" />)}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({})(SignUpForm);
