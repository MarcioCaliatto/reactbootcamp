import React, { Component } from "react";
import { withRouter } from 'react-router-dom';


import imgCurso1 from "./curso1.png";
import imgCurso2 from "./curso2.png";
import imgCurso3 from "./curso3.png";
import imgCurso4 from "./curso4.png";
import Card from "../Card";

class ListaCursos extends Component {

  handleCardClick = (e) => {
    this.props.history.push("/CoursePage");
  }

  render() {
    const courses = [
      {
        title: "Design thinking",
        description: "O processo de inovação cor..",
        author: "Yuri Gonsalves",
        price: "R$19,90",
        image: imgCurso1
      },
      {
        title: "Informática Básica",
        description: "habilidade de informática p...",
        author: "Marcello Fornari",
        price: "R$19,90",
        image: imgCurso2
      },
      {
        title: "Curso de Robótica",
        description: "Seja um programador de rob...",
        author: "Marcello Fornari",
        price: "R$59,90",
        image: imgCurso3
      },
      {
        title: "Programação React",
        description: "Aprenda programar react e f...",
        author: "Vinicius Sponchiado",
        price: "R$39,90",
        image: imgCurso4
      }
    ];


    const coursesComponent = courses.map((course, index) => {
      return (
        <Card key={index}
          onClick={this.handleCardClick}
          title={course.title}
          description={course.description}
          author={course.author}
          price={course.price}
          image={course.image}
        />
      );
    });

    if (this.props.isLoading) {
      return <h1>Carregando</h1>;
    } else return <div style={{ display: 'flex' }}>{coursesComponent}</div>;
  }
}

export default withRouter(ListaCursos)