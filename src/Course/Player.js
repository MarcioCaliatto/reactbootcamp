import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Player extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url={this.props.data || "https://www.youtube.com/watch?v=1DybpDjuxBY"}
        />
      </div>
    );
  }
}
