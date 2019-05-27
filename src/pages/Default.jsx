import React, { Component } from "react";
import Header from "./../components/Header";

class Default extends Component {
  state = {};
  render() {
    return <Header text="page not found" link="/" linkText="home" />;
  }
}

export default Default;
