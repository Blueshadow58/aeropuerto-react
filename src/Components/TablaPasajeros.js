import React from "react";
import Axios from "axios";
import { Grid, Cell} from "react-foundation";
import "./compo.css";
import FormPasajeros from "./FormPasajeros";

export default class TablaPasajeros extends React.Component {
  state = {
    pasajeros: []
  };

  componentDidMount() {
    Axios.get("http://localhost:8080/pasajeros").then(res => {
      console.log(res);
      this.setState({ pasajeros: res.data });
    });
  }

  render() {
    return (

     
      <Grid>

        
        <Cell small={1}/>
        <Cell small={3} >
        <div className="jump ">
        <FormPasajeros/>
          </div>         
        </Cell>
        <Cell small={1}/>

        <Cell small={6} >
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
        <Cell small={1} />
      </Grid>
     


    );
  }
}
