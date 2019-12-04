import React, { Component } from 'react';

import style from './index.module.css';
import img1 from '../Body/curso1.png';
import {Button} from 'antd';
import PlaylistCursos from '../PlaylistCursos';

export default class CourseBody extends Component {

    render() {

        return (
            <div style={{display: 'flex', background: '#FFFFFF', justifyContent: 'center', marginTop: '108px', marginBottom: '155px'}}>
                <div className={style.textContainer}>
                    <h1 className={style.courseTitle}>titulo</h1>
                    <h1 className={style.courseTitle}>subtitulo</h1>
                    <h1>autor</h1>
                    <h1 className={style.titles}>requisitos</h1>
                    <h1 className={style.descricao}>Esse curso é destinado para qualquer profissional com uma experiência previa de um ano em qualquer área.</h1>
                    <h1 className={style.titles}>Descrição</h1>
                    <h1 className={style.descricao}>Proposta de conteúdo desse curso é para ajudar aos profissionais a entenderem o processo de inovação, identificação de um problema, ideação e solução através de uma abordagem de envolvimento e empatia. Apresentação de como as empresas estruturam o processo de fomento a inovação. Cada empresa possuiu um processo de acordo com a sua maturidade corporativa. Os investimentos em inovação podem ser internos ou externos. O curso se propõe a explorar os principais conceitos sobre: startups, venture capital, private equity, casos de sucesso do mercado nacional e mundial. E uma introdução ao abordagem do desing thinking.</h1>
                </div>
                <div className={style.midiaContainer}>
                    <img alt="" src={img1} className={style.image}/>
                    <h1 className={style.priceTag}>preço</h1>
                    <Button classname={style.btnBuy} type='primary'>comprar</Button>
                    <h1 className={style.titles}>conteudo do curso</h1>
                    <PlaylistCursos className={style.playlist}/>
                </div>
            </div>
        );
    }
}
