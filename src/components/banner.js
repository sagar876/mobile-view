import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="page-banner">
        <h1 className="page-title">
          Welcome to <img src="../images/white-logo.svg" />
        </h1>
        <p>2 Active accounts</p>
      </div>
    );
  }
}
