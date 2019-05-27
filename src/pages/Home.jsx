import React, { Component } from "react";
import Header from "../components/Header";

class Home extends Component {
  render() {
    return (
      <Header
        text="search for recipes"
        link="/recipes"
        linkText="find recipes"
        styleClass="header-hero"
      />
    );
  }
}

export default Home;
