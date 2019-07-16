import React, { Component } from "react";
import "./App.css";

import PasajeroLista from "./Components/PasajeroLista";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PasajeroLista />
      </div>
    );
  }
}

export default App;
