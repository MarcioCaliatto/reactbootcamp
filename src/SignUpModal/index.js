import React, { Component } from "react";
import SignUpForm from "../SignUpForm";
import { withRouter } from "react-router-dom";
import Axios from 'axios';

import { Modal } from "antd";
import { Button } from "antd";

class SignUpModal extends Component {
  onSubmit =  async values => {
    
    const request = {
      name: values.firstname,
      surname: values.surname,
      birthdate: values.birthdate,
      cpf: values.cpfnumber,
      email: values.email,
      password: values.password,
    }

    const response = await Axios.post('http://localhost:4000/users', request)
    console.log(response)
  };


  render() {

    const btnTxtStyling = {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '24px',
      display: 'flex',
      color: '#FFFFFF'
    }

    const btnStyling = {
      display: 'flex',
      background: '#2F71FD',
      borderRadius: '6px'
    }

    const titleStyling = {
      color: '#2F71FD',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      letterSpacing: '-1px'
    }

    const modalBodyStyle = {
      width: '800px',
      height: '811.83px',
      background: '#FFFFFF',
      
    }

    return (
      <>
        <Modal
          width='800px'
          centered
          title={<title style={titleStyling}>Cadastro</title>}
          bodyStyle={modalBodyStyle}
          visible={this.props.isVisible}
          onCancel={this.props.onCancel}
          footer={[
            <Button form="signUpForm" htmlType="submit" style={btnStyling}><title style={btnTxtStyling}>Cadastrar</title></Button>
          ]}
        >
          <SignUpForm id="signUpForm" onSubmit={this.onSubmit}></SignUpForm>
        </Modal>
      </>
    );
  }
}

export default withRouter(SignUpModal);
