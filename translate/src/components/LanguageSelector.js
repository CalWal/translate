import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          onClick={() => this.context.onLanguageChange("english")}
          className="au flag"
        />
        <i
          onClick={() => this.context.onLanguageChange("german")}
          className="de flag"
        />
      </div>
    );
  }
}

export default LanguageSelector;
