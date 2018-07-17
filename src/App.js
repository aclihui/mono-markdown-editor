import React, { Component } from 'react';
import ComposeContainer from "./containers/ComposeContainer";
import "./App.css";
import "normalize.css";
import AV from "leancloud-storage";
import "github-markdown-css";
AV.init({
    appId: "xyYU5PqYVE9UOWv9rNBJhPA6",
    appKey: "NWXFdfT0RDmRAiRWkqnSOj5u"
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <ComposeContainer/>
      </div>
    );
  }
}

export default App;
