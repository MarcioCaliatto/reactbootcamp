import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import Card from "../Card";
import { Spin } from "antd";

class ListaCursos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      const courseRequest = await Axios.get("http://localhost:4000/courses");
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

  async handleCardClick(id){
    console.log(id)
    const endPoint = 'http://localhost:4000/courses/'
    
    //endpoint /courses/: id?_embed=classes
    try{
      const getCourseDetails = await Axios.get(endPoint + id + '?_embed=classes')
      this.props.history.push("/CoursePage", { data: getCourseDetails.data})
    }
    catch (error) {
      if (error.response)
        this.props.history.push("/Error404")
      else 
        this.props.history.push("/Error500")
    } 
  };

  render() {
    const coursesStyle = {
      display: "flex",
      alignItems: "center",
      justifySelf: 'center',
      flexWrap: 'wrap',
      maxWidth: '1256px'
    };

    const coursesComponent = this.state.data.map((course) => {
      return (
        <Card
          key={course.id}
          onClick={() => this.handleCardClick(course.id)}
          title={course.title}
          description={course.description}
          author={course.instructor}
          price={course.price}
          thumbnail={course.thumbnail}
        />
      );
    });

    if (this.state.isLoading) {
      return <Spin spinning={this.state.isLoading} size="large" style={{marginBottom: '200px', marginLeft: '32px'}}/>;
    } else return <div style={ coursesStyle }>{coursesComponent}</div>;
  }
}

export default withRouter(ListaCursos);
