import React, { Component } from 'react';
import style from './index.module.css';
import imgCurso1 from './curso1.png';
import imgCurso2 from './curso2.png';
import imgCurso3 from './curso3.png';
import imgCurso4 from './curso4.png';

// import { Container } from './styles';

export default class ListaCursos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      curso1: {
        title: 'Design thinking',
        description: 'O processo de inovação cor..',
        author: 'Yuri Gonsalves',
        price: 'R$19,90',
        image: imgCurso1
      },
      curso2: {
        title: 'Informática Básica',
        description: 'habilidade de informática p...',
        author: 'Marcello Fornari',
        price: 'R$19,90',
        image: imgCurso2
      },
      curso3: {
        title: 'Curso de Robótica',
        description: 'Seja um programador de rob...',
        author: 'Marcello Fornari',
        price: 'R$19,90',
        image: imgCurso3
      },
      curso4: {
        title: 'Programação React',
        description: 'Aprenda programar react e f...',
        author: 'Vinicius Sponchiado',
        price: 'R$19,90',
        image: imgCurso4
      }
    }
  }
  render() {
    return (
      <>
        <div className={style.gridCursos}>
          <div className={style.curso}>
            <img alt='Curso 1' src={this.state.curso1.image} className={style.cursoImage} />
            <h1 className={style.cursoTitle}><b>{this.state.curso1.title}</b><p>{this.state.curso1.description}</p></h1>
            <h1 className={style.cardAuthor}>{this.state.curso1.author}</h1>
            <b className={style.cardPrice}>{this.state.curso1.price}</b>
          </div>

          <div className={style.curso}>
            <img alt='Curso 2' src={this.state.curso2.image} className={style.cursoImage} />
            <h1 className={style.cursoTitle}><b>{this.state.curso2.title}</b><p>{this.state.curso2.description}</p></h1>
            <h1 className={style.cardAuthor}>{this.state.curso2.author}</h1>
            <b className={style.cardPrice}>{this.state.curso2.price}</b>
          </div>

          <div className={style.curso}>
            <img alt='Curso 3' src={this.state.curso3.image} className={style.cursoImage} />
            <h1 className={style.cursoTitle}><b>{this.state.curso3.title}</b><p>{this.state.curso3.description}</p></h1>
            <h1 className={style.cardAuthor}>{this.state.curso3.author}</h1>
            <b className={style.cardPrice}>{this.state.curso3.price}</b>
          </div>

          <div className={style.curso}>
            <img alt='Curso 4' src={this.state.curso4.image} className={style.cursoImage} />
            <h1 className={style.cursoTitle}><b>{this.state.curso4.title}</b><p>{this.state.curso4.description}</p></h1>
            <h1 className={style.cardAuthor}>{this.state.curso4.author}</h1>
            <b className={style.cardPrice}>{this.state.curso4.price}</b>
          </div>
          
        </div>
      </>
    );
  }
}
