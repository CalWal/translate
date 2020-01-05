import React, { Component } from "react";
import UserCreate from "./UserCreate";

class App extends Component {
  state = {
    language: "english"
  };

  onLanguageChange = language => {
    this.setState({
      language: language
    });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            onClick={() => this.onLanguageChange("english")}
            className="au flag"
          />
          <i
            onClick={() => this.onLanguageChange("german")}
            className="de flag"
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
