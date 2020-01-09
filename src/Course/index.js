import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";

import { Spin, Button, Icon } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import Player from "./Player";
import PlayList from "../PlaylistCursos";
import style from "./index.module.css";

class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerData: {},
      playlistData: {},
      currentTrack: null,
      isLoading: true
    };
  }

  async componentDidMount() {
    const URL = `http://localhost:4000/courses/${this.props.match.params.id}/classes`;
    const response = await Axios.get(URL);

    this.setState({
      playlistData: response.data,
      playerData: {
        URL: response.data[0].url,
        title: response.data[0].title
      },
      currentTrack: response.data[0].id,
      isLoading: false
    });
  }

  handlePlaylistClick = (record, index) => {
    console.log("clicked");

    this.setState({
      currentTrack: record.id
    });

    const { title, url } = this.state.playlistData.find(
      element => element.id === record.id
    );

    this.setState({
      playerData: {
        URL: url,
        title: title
      }
    });
  };

  handleNextTrack = () => {
    try {
      const { title, url, id } = this.state.playlistData.find(
        element => element.id > this.state.currentTrack
      );

      this.setState({
        playerData: {
          URL: url,
          title: title
        },
        currentTrack: id
      });
    } catch (error) {
      alert("opa, já foi até a ultima track amigão");
    }
  };

  handlePreviousTrack = () => {
    try {
      const { title, url, id } = this.state.playlistData
        .reverse()
        .find(element => element.id === this.state.currentTrack - 1);

      this.setState({
        playerData: {
          URL: url,
          title: title
        },
        currentTrack: id
      });
    } catch (error) {
      alert("opa, já foi até a ultima track amigão");
    }
  };

  render() {
    if (this.state.isLoading) return <Spin size="large" />;
    else
      return (
        <>
          <Header />
          <div className={style.mainContainer}>
            <div className={style.playerContainer}>
              <span className={style.titles}>
                {this.state.playerData.title}
              </span>
              <div className={style.playerStyling}>
                <Player data={this.state.playerData.URL} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={style.buttonContainer}>
                  <Button
                    size="large"
                    type="ghost"
                    shape="circle"
                    className={style.nextButton}
                    onClick={this.handlePreviousTrack}
                  >
                    <Icon type="left" />
                  </Button>
                  Anterior
                </div>
                <div className={style.buttonContainer}>
                  Próximo
                  <Button
                    size="large"
                    type="ghost"
                    shape="circle"
                    className={style.previousButton}
                    onClick={this.handleNextTrack}
                  >
                    <Icon type="right" />
                  </Button>
                </div>
              </div>
            </div>
            <div className={style.playlistContainer}>
              <span className={style.titles}>Aulas</span>
              <div className={style.playlist}>
                <PlayList
                  onClick={this.handlePlaylistClick}
                  data={this.state.playlistData || null}
                  isPlaying={true}
                />
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
  }
}

export default withRouter(Course);
