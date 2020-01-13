import React, { Component } from "react";
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};
export default class HelloClock extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export function BoilingVerdict(props) {
  return (
    <p>
      The water would
      {(Number.isNaN(props.celsius) || props.celsius < 100) && " not"} boil.
    </p>
  );
}
