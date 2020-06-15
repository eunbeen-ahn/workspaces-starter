import React from "react";
import "./styles.css";
import Header from "./components/Header"

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="gnb"/>
        <Header />
        <h2>Class Component</h2>
      </div>
    );
  }
}

export default App;
