import React, { Component } from "react";
import Form from "./Form";
import Preview from "./Preview";
import "./App.css";

export default class FormPreviewContainer extends Component {
  state = {
    firstNameInputValue: "",
    lastNameInputValue: "",
    idInputValue: ""
  };

  onFirstNameInputChange = e => {
    this.setState({
      firstNameInputValue: e.target.value
    });
  };

  onLastNameInputChange = e => {
    this.setState({
      lastNameInputValue: e.target.value
    });
  };

  onIdInputChange = e => {
    this.setState({
      idInputValue: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Form
          firstNameInputValue={this.state.firstNameInputValue}
          lastNameInputValue={this.state.lastNameInputValue}
          idInputValue={this.state.idInputValue}
          onFirstNameInputChange={this.onFirstNameInputChange}
          onLastNameInputChange={this.onLastNameInputChange}
          onIdInputChange={this.onIdInputChange}
        />
        <Preview
          firstNameInputValue={this.state.firstNameInputValue}
          lastNameInputValue={this.state.lastNameInputValue}
          idInputValue={this.state.idInputValue}
        />
      </div>
    );
  }
}
