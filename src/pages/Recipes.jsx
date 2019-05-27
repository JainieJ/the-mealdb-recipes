import React, { Component } from "react";
import Search from "../components/Search";

class Recipes extends Component {
  state = {
    search: ""
  };
  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };
  handleSubmit = e => {
    // e.preventDefault();
    console.log(this.state.search);
  };
  render() {
    return (
      <div className="container">
        <Search
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* row for ingredients */}
      </div>
    );
  }
}

export default Recipes;
