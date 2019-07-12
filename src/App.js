import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PasajeroLista from './Components/PasajeroLista';

class App extends Component {

  render(){
    return(
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome to react</h1>
      </header>
      <PasajeroLista />
    </div>
  );
  }
}

export default App;

