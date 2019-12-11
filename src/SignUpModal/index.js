import React, { Component } from "react";
import SignUpForm from "../SignUpForm";
import { withRouter } from "react-router-dom";
import Axios from 'axios';

import { Modal } from "antd";
import { Button } from "antd";

class SignUpModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoading: null
    }
  }

  onSubmit = async values => {

    this.setState({
      isLoading: true
    })

    const request = {
      name: values.firstname,
      surname: values.surname,
      birthdate: values.birthdate,
      cpf: values.cpfnumber,
      email: values.email,
      password: values.password,
    }

    try {
      const response = await Axios.post('http://localhost:4000/users', request)
      
    }
    catch (error) {
        //tratamento ou exibir msg né fio
    }

    this.setState({
      isLoading: false
    })
  };


  render() {

    const btnTxtStyling = {
      display: 'block',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '24px',
      color: '#FFFFFF',
    }

    const titleStyling = {
      color: '#2F71FD',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '24px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      letterSpacing: '-1px'
    }

    const modalBodyStyle = {
      width: '800px',
      height: '811.83px',
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
            <div style={{width: '264px', marginLeft: '250px'}}>
              <Button loading={this.state.isLoading} block size='large' form="signUpForm" htmlType="submit" type='primary'><title style={btnTxtStyling}>Cadastrar</title></Button>
            </div>
          ]}
        >
          <SignUpForm id="signUpForm" onSubmit={this.onSubmit}></SignUpForm>
        </Modal>
      </>
    );
  }
}

export default withRouter(SignUpModal);
