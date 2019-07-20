import React from "react";
import axios from "axios";
import { Button, Colors} from "react-foundation";
import "./compo.css";

export default class FormPasajeros extends React.Component {

  

  state = {
    nombre: "",
    apellido: "",
    nacionalidad: ""
  };

  handleChangeNombre = event => {
    this.setState({
      nombre: event.target.value
    });
  };
  handleChangeApellido = event => {
    this.setState({
      apellido: event.target.value
    });
  };
  handleChangeNacionalidad = event => {
    this.setState({
      nacionalidad: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    const test = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      nacionalidad: this.state.nacionalidad
    };
    axios
      
      .post("http://localhost:8080/pasajeros", test)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
      window.location.reload(); 

  };
  
  render() {
    return (
   
      <div className="contenedor">
        <form onSubmit={this.handleSubmit}>
        
              <h1 className="blanco">Agregar</h1>
             
                <div className="form-group text-center ">
       

                  <input
                    type="text"
                    name="nombre"
                    onChange={this.handleChangeNombre}
                    className="form-control"
                    id="nombre"
                    placeholder="Ingrese Nombre"
                  />               
                 
                  <input 
                    type="text"
                    name="apellido"
                    onChange={this.handleChangeApellido}
                    className="form-control"
                    id="apellido"
                    placeholder="Ingrese Apellido"
                  />                 
             
                  <input
                    type="text"
                    name="nacionalidad"
                    onChange={this.handleChangeNacionalidad}
                    className="form-control"
                    id="nacionalidad"
                    placeholder="Ingrese Nacionalidad"
                  />                                  
                  <Button type="submit"  color={Colors.WARNING}>
                    Agregar
                  </Button>
                </div>
              
         
         
        </form>
      </div>
      
    );
  }


}
