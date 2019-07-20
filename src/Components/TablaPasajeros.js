import React from "react";
import Axios from "axios";
import { Grid, Cell, Button, Colors, Sizes} from "react-foundation";
import "./compo.css";

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

     
      <Grid className="">

        <Cell small={3} />        


        
        <Cell small={1}/>
        <Cell small={3} >
        <div className="contenedor jump">
          
          <div class="form-style-6">
          <h1 className="blanco">Ingresar Pasajero</h1>
          <form>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="text" placeholder="Nacionalidad" />
          <Button size={Sizes} color={Colors.SUCCESS}>Aceptar</Button>
          </form>
          </div>
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
