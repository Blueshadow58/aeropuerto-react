import React from "react";
import Axios from "axios";
import { Grid, Cell } from "react-foundation";
import "./compo.css";

export default class TablaVuelos extends React.Component {
  state = {
    vuelos: []
  };

  componentDidMount() {
    Axios.get("http://localhost:8080/vuelos/index.json").then(res => {
      console.log(res);
      this.setState({ vuelos: res.data });
    });
  }

  render() {
    return (

     
      <Grid className="">
        <Cell small={3} />
        <Cell small={6} className="jump">
          <table id="custom">
            <thead>
              <tr>
                <th >Id</th>
                <th >Codigo</th>
                <th >Fecha</th>
                <th>Hora</th>
                <th >Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.vuelos.map(vuelo => {
                return (
                  <tr key={vuelo.id}>
                    <td>{vuelo.id}</td>
                    <td>{vuelo.nombre}</td>
                    <td>{vuelo.fecha}</td>
                    <td>{vuelo.hora}</td>
                    <td>{vuelo.estado}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Cell>
        <Cell small={3} />
      </Grid>
      


    );
  }
}
