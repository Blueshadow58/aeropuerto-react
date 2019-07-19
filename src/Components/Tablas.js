import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Colors,Sizes,ButtonGroup } from "react-foundation";
import "../Components/compo.css";
import TablaPasajeros from "./TablaPasajeros";
import TablaVuelos from "./TablaVuelos";

function BasicExample() {
  return (
    <Router>
      <div>
        <div>
        <ButtonGroup className="botones" size={Sizes.SMALL}>
          <Link to="/Pasajero">
            <Button color={Colors.WARNING}>Tabla Pasajeros</Button>
          </Link>
          <br/>
          <Link to="/Vuelo">
            <Button color={Colors.WARNING}>Tabla Vuelos</Button>
          </Link>
          
          </ButtonGroup>
        </div>
        <Route exact path="/Pasajero" component={Pasajero} />
        <Route path="/Vuelo" component={Vuelo} />
      </div>
    </Router>
  );
}

function Pasajero() {
  return (
    <div>
      <TablaPasajeros />
    </div>
  );
}

function Vuelo() {
  return (
    <div>
      <TablaVuelos />
    </div>
  );
}

export default BasicExample;
