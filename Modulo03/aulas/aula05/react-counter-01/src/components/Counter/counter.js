import React, { Component } from "react";
import css from "./counter.module.css";

export default class counter extends Component {
  constructor() {
    super();

    this.currentCounter = 2;
  }

  handleClick = () => {
    console.log("click");
    this.currentCounter--;
    this.render();
  };

  render() {
    return (
      <div className={css.counterContainer}>
        <button
          onClick={this.handleClick}
          className="waves-effect waves-light btn red darken-4"
        >
          -
        </button>
        <span className={css.counterValue}>{this.currentCounter}</span>
        <button className="waves-effect waves-light btn blue darken-4">
          +
        </button>
      </div>
    );
  }
}
