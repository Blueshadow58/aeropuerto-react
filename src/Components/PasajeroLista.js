import React from "react";
import Axios from "axios";
import {table,tbody,thead,tr,th,td} from 'react-foundation';

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
     
     
      <table>
        <thead >
          <tr>
            <th className="text-center">Id</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">Apellido</th>
            <th className="text-center">Nacionalidad</th>
          </tr>
        </thead>
        <tbody>
                    
            {this.state.pasajeros.map(pasajero => {
              return <tr key={pasajero.id}>
            <td>{pasajero.id}</td>
            <td>{pasajero.nombre}</td>
            <td>{pasajero.apellido}</td>
            <td>{pasajero.nacionalidad}</td>
            </tr>
            })}          
        </tbody>
      </table>
    


    );
  }
}
