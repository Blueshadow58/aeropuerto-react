import React from "react";
import Axios from "axios";
import { Grid, Cell } from "react-foundation";
import "./compo.css";

export default class PasajeroLista extends React.Component {
  state = {
    pasajeros: []
  };

  componentDidMount() {
    Axios.get("http://localhost:8080/pasajeros/index.json").then(res => {
      console.log(res);
      this.setState({ pasajeros: res.data });
    });
  }

  render() {
    return (

      <div className="background">
      <Grid className="">
        <Cell small={3} />
        <Cell small={6} className="jump">
          <table id="custom">
            <thead>
              <tr>
                <th >Id</th>
                <th >Nombre</th>
                <th >Apellido</th>
                <th >Nacionalidad</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pasajeros.map(pasajero => {
                return (
                  <tr key={pasajero.id}>
                    <td>{pasajero.id}</td>
                    <td>{pasajero.nombre}</td>
                    <td>{pasajero.apellido}</td>
                    <td>{pasajero.nacionalidad}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Cell>
        <Cell small={3} />
      </Grid>
      </div>


    );
  }
}
