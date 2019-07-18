import React from "react";
import "./App.css";
import Header from "./Header";
import FormPreviewContainer from "./FormPreviewContainer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormPreviewContainer />
      </div>
    );
  }
}
