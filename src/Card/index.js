import React, { Component } from "react";
import style from "./index.module.css";

export default class Card extends Component {
  render() {
    return (
      <div className={style.curso} onClick={this.props.onClick}>
        <img
          alt="imageCurso"
          src={this.props.image}
          className={style.cursoImage}
        />
        <div className={style.separator}/>
        <span className={style.cursoTitle}>
          <b>{this.props.title}</b>
        </span>
        <span className={style.description}>{this.props.description}</span>
        <span className={style.cardAuthor}>{this.props.author}</span>
        <span className={style.cardPrice}>{this.props.price}</span>
      </div>
    );
  }
}
