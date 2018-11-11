import React, { Component } from "react";
import { cn } from "@bem-react/classname";

import "./App.css";
import { Content } from "../Content/Content";
import { Footer } from "../Footer/Footer";

const cnApp = cn("App");

class App extends Component {
  render() {
    return (
      <div className={cnApp()}>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
