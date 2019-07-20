import React from "react";
import Axios from "axios";
import { Grid, Cell, Sizes, Colors, Button} from "react-foundation";
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

     
      <Grid >
        
        <Cell small={1}/>
        <Cell small={3}>
        <div className="contenedor jump">

        <div class="form-style-6">
          <h1 className="blanco">Ingresar Vuelo</h1>
          <form>
            <br/>
            
          <input type="text" placeholder="Codigo" />
          <input type="text" placeholder="Fecha" />
          <input type="text" placeholder="Hora" />
          <input type="text" placeholder="Estado" />
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
        <Cell small={1}/>
      </Grid>
      


    );
  }
}
