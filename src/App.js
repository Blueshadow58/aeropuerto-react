import React, { Component } from "react";
import "./App.css";

import TablaPasajeros from "./Components/TablaPasajeros";
import TablaVuelos from "./Components/TablaVuelos";

class App extends Component {
  render() {
    return (
      <div className="App">
               
        <TablaPasajeros />
       
        <TablaVuelos/>
        
      </div>
    );
  }
}

export default App;
