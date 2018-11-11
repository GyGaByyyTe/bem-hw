import React, { Component } from "react";

import "./App.css";
import { Content } from "./view/components/Content/Content";
import { Footer } from "./view/components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
