import React, { Component } from "react";
import css from "./counter.module.css";

export default class extends Component {
  render() {
    return <span className={css.counterValue}>{this.props.value}</span>;
  }
}
