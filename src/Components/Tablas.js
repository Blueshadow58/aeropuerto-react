
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./compo.css";
import TablaPasajeros from "./TablaPasajeros";
import TablaVuelos from "./TablaVuelos";

function BasicExample() {               
      
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Tabla pasajero</Link>
          </li>
          <li>
            <Link to="/About">Tabla Vuelos</Link>
          </li>         
        </ul>      
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />        
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
       <TablaPasajeros/>
    </div>
  );
}

function About() {
  return (
    <div>
      <TablaVuelos/>
    </div>
  );
}


export default BasicExample;
