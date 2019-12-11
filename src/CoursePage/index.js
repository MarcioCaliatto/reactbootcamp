import React, { Component } from "react";
import Header from "../Header";
import CourseBody from "../CourseBody";
import Footer from "../Footer";
// import { Container } from './styles';

export default class CoursePage extends Component {
  constructor(props) {
    super(props);

    const path = props.location.state.data;

    if(!path || path === null) {
      this.props.history.push('/Error404')
    }

    this.state = {
      courseTitle: path.title,
      courseDesc: path.description,
      courseInstructor: path.instructor,
      coursePrice: path.price,
      courseRequirement: path.requirements,
      courseThumbnail: path.thumbnail,
      classesData: path.classes
    };
  }

  componentDidMount(){
    window.scrollTo(0, 0);
}

  render() {
    return (
      <div>
        <Header />
        <CourseBody
          title={this.state.courseTitle}
          description={this.state.courseDesc}
          instructor={this.state.courseInstructor}
          thumbnail={this.state.courseThumbnail}
          price={this.state.coursePrice}
          classesData={this.state.classesData}
        />
        <Footer />
      </div>
    );
  }
}
