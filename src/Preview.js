import React, { Component } from "react";

// firstNameInputValue={this.state.firstNameInputValue}
// lastNameInputValue={this.state.lastNameInputValue}
// idInputValue={this.state.idInputValue}

export default class Preview extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.firstNameInputValue}</h1>
        <h1>{this.props.lastNameInputValue}</h1>
        <h1>{this.props.idInputValue}</h1>
      </div>
    );
  }
}
