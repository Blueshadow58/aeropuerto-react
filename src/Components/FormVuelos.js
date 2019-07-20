import React from "react";
import axios from "axios";
import { Button, Colors} from "react-foundation";
import "./compo.css";

export default class FormVuelos extends React.Component {

  

  state = {
    codigo: "",
    fecha: "",
    hora: "",
    estado:""
  };

  handleChangeCodigo = event => {
    this.setState({
      codigo: event.target.value
    });
  };
  handleChangeFecha = event => {
    this.setState({
      fecha: event.target.value
    });
  };
  handleChangeHora = event => {
    this.setState({
      hora: event.target.value
    });
  };
  handleChangeEstado = event => {
    this.setState({
      estado: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    
    const test = {
      codigo: this.state.codigo,
      fecha: this.state.fecha,
      hora: this.state.hora,
      estado: this.state.estado
    };
    axios
      
      .post("http://localhost:8080/vuelos", test)
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
                    name="codigo"
                    onChange={this.handleChangeCodigo}
                    className="form-control"
                    id="codigo"
                    placeholder="Ingrese Codigo"
                  />               
                 
                  <input 
                    type="datetime"
                    name="fecha"
                    onChange={this.handleChangeFecha}
                    className="form-control"
                    id="fecha"
                    placeholder="Ingrese Fecha"
                  />                 
             
                  <input
                    type="text"
                    name="hora"
                    onChange={this.handleChangeHora}
                    className="form-control"
                    id="hora"
                    placeholder="Ingrese Hora"
                  />  

                  <input
                    type="text"
                    name="estado"
                    onChange={this.handleChangeEstado}
                    className="form-control"
                    id="estado"
                    placeholder="Ingrese Estado"
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
