import React, { Component } from "react";
import "./App.css";

export default class Form extends Component {
  render() {
    return (
      <div className="Form">
        <label>First name</label>
        <input
          value={this.props.firstNameInputValue}
          onChange={this.props.onFirstNameInputChange}
          type="text"
        />
        <label>Last name</label>
        <input
          value={this.props.lastNameInputValue}
          onChange={this.props.onLastNameInputChange}
          type="text"
        />
        <label>ID</label>
        <input
          value={this.props.idInputValue}
          onChange={this.props.onIdInputChange}
          type="text"
        />
        <button>SUBMIT</button>
      </div>
    );
  }
}
