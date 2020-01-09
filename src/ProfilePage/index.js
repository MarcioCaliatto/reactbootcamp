import React, { Component } from "react";
import { Spin } from "antd";
import Axios from "axios";

import Header from "../Header";
import Footer from "../Footer";
import UserCourses from "./UserCourses";
import UserInfo from "./UserInfo";
import style from "./index.module.css";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: {
        user: null,
        courses: []
      }
    };
  }

  async componentDidMount() {
    const URL = "http://localhost:4000/users/me";
    const Auth = localStorage.getItem("token");

    await Axios.get(URL, { headers: { Authorization: Auth } })
      .then(response => {
        this.setState({
          isLoading: false,
          data: {
            user: response.data,
            courses: response.data.courses
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading)
      return (
        <div className={style.masterContainer}>
          <Spin size="large" />
        </div>
      );
    else {
      return (
        <>
          <Header />

          <div className={style.masterContainer}>
            <div>
              <span className={style.containerTitle}>Minha Conta</span>
              <UserInfo data={this.state.data.user} />
            </div>
            <div className={style.containerCursos}>
              <span className={style.containerTitle}>Meus Cursos</span>
              <UserCourses data={this.state.data.courses} />
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}
