import React, { Component } from "react";
import css from "./counter.module.css";
import IncrementtButton from "./IncrementtButton";
import DecrementButton from "./DecrementButton";
import Value from "./Value";
import Steps from "./Steps";

export default class counter2 extends Component {
  handleButtonClick = (clickType) => {
    this.props.onCount(clickType);
  };
  render() {
    const { countValue, currentStep } = this.props;

    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />

        <Value value={countValue} />

        <IncrementtButton onIncrement={this.handleButtonClick} />

        <Steps currentStep={currentStep} />
      </div>
    );
  }
}
