import React, { Component } from "react";
import "./App.css";

export default class componentName extends Component {
  state = {
    counter: 0
  };

  incrementState = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrementState = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button
          onClick={this.decrementState}
          className="Btn"
          type="Button"
          label="dewdw"
        >
          decrement counter
        </button>
        <button
          onClick={this.incrementState}
          className="Btn"
          type="Button"
          label="dewdw"
        >
          increment counter
        </button>
      </div>
    );
  }
}
