import React, { Component } from "react";

import CartContext from "../context";

import style from "./index.module.css";
import { Button } from "antd";
import PlaylistCursos from "../PlaylistCursos";

class CourseBody extends Component {
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
          <span className={style.requirements}>requisitos</span>
          <span>
            Esse curso é destinado para qualquer profissional com uma
            experiência previa de um ano em qualquer área.
          </span>
          <span className={style.descTitle}>Descrição</span>
          <span className={style.descricao}>
            Proposta de conteúdo desse curso é para ajudar aos profissionais a
            entenderem o processo de inovação, identificação de um problema,
            ideação e solução através de uma abordagem de envolvimento e
            empatia. Apresentação de como as empresas estruturam o processo de
            fomento a inovação. Cada empresa possuiu um processo de acordo com a
            sua maturidade corporativa. Os investimentos em inovação podem ser
            internos ou externos. O curso se propõe a explorar os principais
            conceitos sobre: startups, venture capital, private equity, casos de
            sucesso do mercado nacional e mundial. E uma introdução ao abordagem
            do desing thinking.
          </span>
        </div>
        <div className={style.midiaContainer}>
          <img
            alt="Thumbnail"
            src={this.props.thumbnail}
            className={style.image}
          />
          <span className={style.priceTag}>R${this.props.price}</span>
          <Button
            className={style.btnBuy}
            type="primary"
            onClick={() => this.context.cart.addItem(this.props.courseID)}
            size='large'
          >
            <span className={style.btnText}>comprar</span>
          </Button>
          <span className={style.courseContent}>Conteudo do curso</span>
          <div className={style.playlist}>
            <PlaylistCursos data={this.props.classesData} />
          </div>
        </div>
      </div>
    );
  }
}

CourseBody.contextType = CartContext;
export default CourseBody;
