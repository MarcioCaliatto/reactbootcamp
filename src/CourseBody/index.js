import React, { Component } from "react";

import style from "./index.module.css";
import img1 from "./curso1.png";
import { Button } from "antd";
import PlaylistCursos from "../PlaylistCursos";

export default class CourseBody extends Component {

  render() {
    return (
      <div
        style={{
          display: "flex",
          background: "#FFFFFF",
          justifyContent: "center",
          marginTop: "108px",
          marginBottom: "155px"
        }}
      >
        <div className={style.textContainer}>
          <span className={style.courseTitle}>{this.props.title}</span>
          <span className={style.courseAuthor}>{this.props.instructor}</span>
          <span className={style.titles}>requisitos</span>
          <span className={style.titles}>Descrição</span>
          <span className={style.descricao}>{this.props.description}</span>
        </div>
        <div className={style.midiaContainer}>
          <img alt="" src={img1} className={style.image} />
          <span className={style.priceTag}>R${this.props.price}</span>
          <Button className={style.btnBuy} type="primary">
            comprar
          </Button>
          <span className={style.titles}>conteudo do curso</span>
          <div className={style.playlist}>
            <PlaylistCursos data={this.props.classesData}/>
          </div>
        </div>
      </div>
    );
  }
}
