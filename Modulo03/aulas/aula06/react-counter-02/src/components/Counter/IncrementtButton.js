import React, { Component } from "react";

export default class IncrementtButton extends Component {
  handleButtonClick = () => {
    this.props.onIncrement("+");
  };

  render() {
    return (
      <button
        onClick={this.handleButtonClick}
        className="waves-effect waves-light btn blue darken-4"
      >
        +
      </button>
    );
  }
}
