import React, { Component } from "react";
import { render } from "react-dom";

import App from "./App";
import Example from "./Welcome";
const tray = document.getElementById("root1");
function renderwelcome() {
  render(<Example name="John Smith" />, tray);
}
class ActionLink extends Component {
  componentDidMount() {
    renderwelcome();
  }
  handleClick1(e) {
    e.preventDefault();
    renderwelcome();
  }
  handleClick(e) {
    e.preventDefault();
    render(<App />, tray);
  }
  handleClick2(e) {
    console.log(e);
    e.preventDefault();
    render(<Greeting name={e.target.id} />, tray);
  }
  render() {
    return (
      <div>
        <button id="temp" onClick={this.handleClick}>
          Temperature Converter
        </button>
        <button id="welc" onClick={this.handleClick1}>
          Welcome
        </button>
        <button id="Test" onClick={this.handleClick2} value="Checking">
          Test
        </button>
      </div>
    );
  }
}

render(<ActionLink />, document.getElementById("root"));

class Greeting extends React.Component {
  static defaultProps = {
    name: "stranger"
  };

  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}
