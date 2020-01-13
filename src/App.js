import React, { Component } from "react";
import HelloClock, { BoilingVerdict } from "./Hello";
import {
  toCelsius,
  tryConvert,
  toFahrenheit,
  IsNumeric
} from "./ConvertFunctions";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }
  componentDidMount() {
    console.log("App Load Complete");
  }
  componentWillUnmount() {
    console.log("Bye from App");
  }
  render() {
    const scale = this.state.scale;
    const temperature = IsNumeric(this.state.temperature)
      ? this.state.temperature
      : "";
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <HelloClock
          scale="c"
          temperature={celsius}
          onChange={this.handleCelsiusChange}
        />

        <HelloClock
          scale="f"
          temperature={fahrenheit}
          onChange={this.handleFahrenheitChange}
        />

        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
