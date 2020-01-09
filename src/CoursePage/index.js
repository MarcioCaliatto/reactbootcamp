import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import Header from "../Header";
import CourseBody from "../CourseBody";
import Footer from "../Footer";

class CoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);

    try {
      const courseRequest = await Axios.get(
        `http://localhost:4000/courses/${this.props.match.params.id}?_embed=classes`
      );
      this.setState({
        data: courseRequest.data,
        isLoading: false
      });
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <CourseBody
          title={this.state.data.title}
          description={this.state.data.description}
          instructor={this.state.data.instructor}
          thumbnail={"/".concat(this.state.data.thumbnail)}
          price={this.state.data.price}
          classesData={this.state.data.classes}
          courseID={this.state.data.id}
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(CoursePage);
