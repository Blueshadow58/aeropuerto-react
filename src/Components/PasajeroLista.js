import React from 'react';
import axios from 'axios';

export default class PasajeroLista extends React.Component{

    state = {
        pasajeros: []
    }

    componentDidMount(){
        axios.get('http://localhost:8080/pasajeros.json').then(res =>{
            console.log(res);
            this.setSate({ pasajeros : res.data});
        })
    }

    render(){
        return(
            <ul>
                {this.state.pasajeros.map(pasajero => <li>{pasajero.nombre}</li>)}
            </ul>
        )
    }
}

