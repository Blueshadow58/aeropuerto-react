import React from 'react';
import Axios from 'axios';

export default class PasajeroLista extends React.Component{

  state = {
    pasajeros: []
  }

  componentDidMount(){
    Axios.get('http://localhost:8080/pasajeros/index.json')
    .then(res => {console.log(res);
    this.setState({ pasajeros: res.data });

    });

  }

  render(){
    return( 
    <div>
    <ul>{this.state.pasajeros.map(pasajero => <li key={pasajero.id}>{pasajero.nombre}</li>)}
    </ul>
    </div>
)
  }

}