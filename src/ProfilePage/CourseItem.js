import React, { Component } from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

export default class CourseItem extends Component {
  render() {
    const courseLink = "/Course/".concat(this.props.id);
    return (
      <Link to={courseLink}>
        <div className={style.itemStyle} onClick={this.props.onClick}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                className={style.courseImage}
                src={this.props.thumbnail}
                alt="imgCurso"
              />
              <div className={style.idHolder}>
                <span className={style.itemTitle}>ID</span>
                <span className={style.itemDesc}>#{this.props.id}</span>
              </div>
              <div className={style.courseHolder}>
                <span className={style.itemTitle}>Curso</span>
                <span className={style.itemDesc}>
                  {this.props.title} - {this.props.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
