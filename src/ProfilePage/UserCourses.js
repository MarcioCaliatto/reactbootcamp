import React, { Component } from "react";
import CourseItem from "./CourseItem";

export default class UserCourses extends Component {

  handleItemClick = (id) => {
    //this.props.history.push(`./Course:${id}`)
    this.props.history.push('./Course')
  }

  render() {
    const CourseList = this.props.data.map(item => {
      return (
        <CourseItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnail}
          onClick={() => this.handleItemClick}
        />
      );
    });

    return <>{CourseList}</>;
  }
}
