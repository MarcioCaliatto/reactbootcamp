import React, { Component } from "react";
import SignUpForm from "../SignUpForm";
import { withRouter } from "react-router-dom";

import { Modal } from "antd";
import { Button } from "antd";

class SignUpModal extends Component {
  onSubmit = values => {
    console.log(values);
    this.props.history.push("/ProfilePage");
  };

  render() {
    return (
      <>
        <Modal
          title="Cadastro"
          visible={this.props.isVisible}
          onCancel={this.props.onCancel}
          footer={[
            <Button form="signUpForm" htmlType="submit">
              Cadastrar
            </Button>
          ]}
        >
          <SignUpForm id="signUpForm" onSubmit={this.onSubmit}></SignUpForm>
        </Modal>
      </>
    );
  }
}

export default withRouter(SignUpModal);
