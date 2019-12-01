import React, { Component } from "react";
import style from "./index.module.css";

export default class Card extends Component {
  render() {
    return (
      <div className={style.curso}>
        <img
          alt="Curso 1"
          src={this.props.image}
          className={style.cursoImage}
        />
        <h1 className={style.cursoTitle}>
          <b>{this.props.title}</b>
        </h1>
        <p className={style.description}>{this.props.description}</p>
        <h1 className={style.cardAuthor}>{this.props.author}</h1>
        <b className={style.cardPrice}>{this.props.price}</b>
      </div>
    );
  }
}
