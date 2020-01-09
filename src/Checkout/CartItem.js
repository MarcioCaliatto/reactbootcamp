import React, { Component } from "react";
import style from "./index.module.css";
import { Icon } from "antd";

export default class CartItem extends Component {
  render() {
    return (
      <div className={style.itemStyle}>
        <div
          style={{
            display: "flex",
            flexGrow: "1",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '15px'}}><Icon type="delete" onClick={this.props.onClick}/></div>
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
          <div className={style.valueHolder}>
            <span className={style.itemTitle}>Valor</span>
            <span className={style.itemDesc}>R${this.props.price}</span>
          </div>
        </div>
      </div>
    );
  }
}
